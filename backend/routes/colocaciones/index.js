const express = require("express");
const router = express.Router();

const path = require("path");

const { validateFile, validateFileExtension } = require("../../Utils/validateFiles");

const { process } = require("../../middlewares/multer.config");
const { getColumnNames } = require("../../Utils/getColumnNames");
const { parseCSV } = require("../../Utils/files/parseCSV");
const { deleteFile } = require("../../Utils/files/deleteFile");
const { insertColocacionesInDB } = require("../../Utils/insertColocacionesInDB");

// POST colocaciones
router.post("/", process.single("process-file"), async (request, response) => {
	try {
		const uploadedFile = request.file;

		validateFile(uploadedFile);
		validateFileExtension(uploadedFile);


		const filePath = path.join(__dirname, "../../process", uploadedFile.filename);
		const columns = await getColumnNames("colocaciones");


		const csvInfo = await parseCSV(filePath, columns);

		await deleteFile(filePath);

		await insertColocacionesInDB(csvInfo);

		return response.json({
			Status: "Success",
			message: "Archivo procesado correctamente",
			csvLog: {
				totalRows: csvInfo.totalRows,
				correctRowsCount: csvInfo.correctRows.length,
				incorrectRowsCount: csvInfo.incorrectRows.length,
				incorrectRows: csvInfo.incorrectRows,
				errors: csvInfo.error.length,
			}
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

module.exports = router;