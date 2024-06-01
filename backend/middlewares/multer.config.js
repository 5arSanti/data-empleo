const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let splitValue = "_$$_";

let storage = multer.diskStorage({
    destination: (request, file, callback) => {
		const selectedOption = request.get("selectedOption");

        callback(null, `./uploads/${selectedOption}`);
    },
    filename: (request, file, callback) => {
		const selectedOption = request.get("selectedOption");

		const fileDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		let formatName =`${selectedOption}${splitValue}${fileDate}${splitValue}${file.originalname}.${mimeTypes.extension(file.mimetype)}`;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: storage,
});

module.exports = { upload, splitValue };