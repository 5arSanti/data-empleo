const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer.config");

const { validateFiles } = require("../../Utils/validateFiles");
const { readFolder } = require("../../Utils/files/readFolder");

router.get('/', async (request, response) => {
	try {
		const folders = await readFolder();

		let files = []

		folders.map((item) => {
			const data = Promise.all([readFolder(item)]);
			files.push({[item]: data})
			console.log(files)
		})

		return response.json({files: files})

	} catch (err) {
		return response.json({Error: err.message})
	}
});

router.get('/folders', async (request, response) => {
	try {
		const folders = await readFolder();

		return response.json({folders: folders})

	} catch (err) {
		return response.json({Error: err.message})
	}
});

router.post("/upload/:selectedOption", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		validateFiles(uploadedFiles, request.params.selectedOption);

		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
