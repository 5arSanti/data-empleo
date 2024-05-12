const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (request, file, callback) => {
		const selectedOption = request.get("selectedOption");
		const fileDate = moment().format("YYYY-MM-DD_HH-mm-ss");

		let formatName =`${selectedOption}_${fileDate}_${file.fieldname}.${mimeTypes.extension(file.mimetype)}`;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: storage
});

module.exports = upload;