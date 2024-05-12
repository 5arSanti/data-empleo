const express = require("express");
const upload = require("../../middlewares/multer.config");

const router = express.Router();

router.post("/upload", upload.single("file"), async (request, response) => {
	try {
		const uploadedFile = request.file;

		if (!uploadedFile) {
			throw new Error("Error procesando el archivo")
		}

		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
