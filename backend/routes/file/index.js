const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer.config");
const { validateFiles } = require("../../Utils/validateFiles");


router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		validateFiles(uploadedFiles, request.headers.selectedOption);


		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
