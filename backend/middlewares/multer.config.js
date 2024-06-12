const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let splitValue = "_$$_";

let storage = multer.diskStorage({
    destination: (request, file, callback) => {
		const { selectedOption } = request.body;

        callback(null, `./uploads/${selectedOption}`);
    },
    filename: (request, file, callback) => {
		const { selectedOption, year, month } = request.body;

		const filePublicationDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		const nameArray = [selectedOption, year, month, filePublicationDate, file.originalname];
		const nameFile = nameArray.join(splitValue);


		let formatName =`${nameFile}.${mimeTypes.extension(file.mimetype)}`;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: storage,
});

module.exports = { upload, splitValue };