const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer.config");


router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		if (!uploadedFiles || uploadedFiles.length === 0) {
			throw new Error("Error procesando el archivo")
		}

		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
