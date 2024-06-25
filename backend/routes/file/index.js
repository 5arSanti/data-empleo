const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { upload, process } = require("../../middlewares/multer.config");

const { validateFiles, validateFile } = require("../../Utils/validateFiles");
const { readFolder } = require("../../Utils/files/readFolder");
const { formatFile } = require("../../Utils/files/formatFile");
const { deleteFile } = require("../../Utils/files/deleteFile");

// GET File
router.get('/', async (request, response) => {
	try {
		let files = {};

		const mainFolders = await readFolder();

		const promises = mainFolders.map(async (item) => {
			const files = await readFolder(item);
			const formattedFile = await formatFile(files);

			return {[item]: formattedFile};
		})

		const resolved = await Promise.all(promises);

		resolved.forEach((item) => {
			const key = Object.keys(item)[0];
			files[key] = item[key];
		});

		return response.json({files: files})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// DELETE File
router.delete('/:folder/:file', async (request, response) => {
	try {
		const { folder, file } = request.params;

		const pathToFile = `uploads/${folder}/${file}`;

		await deleteFile(pathToFile);

		return response.json({Status: "Success", message: "Archivo eliminado correctamente"})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// GET File/folder/file/fileName
router.get('/:folder/:file/:fileName', async (request, response) => {
	try {
		const { folder, file, fileName } = request.params;

		const fileUri = path.join(__dirname, "../../uploads", folder, file)

		if (!fs.existsSync(fileUri)) {
			return response.status(404).json({ Error: 'Archivo no encontrado' });
		}

		return response.sendFile(fileUri, `${fileName}`)

	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


// GET file/folders
router.get('/folders', async (request, response) => {
	try {
		const folders = await readFolder();

		return response.json({folders: folders})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// POST file/upload
router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		const { selectedOption } = request.body;

		validateFiles(uploadedFiles, selectedOption);

		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
