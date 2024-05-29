const fs = require("fs");

const readFolder = async (folder="") => {
	return new Promise((resolve, reject) => {
		fs.readdir(`uploads/${folder}`, (err, files) => {
			if (err) {
				reject(err);
			}

			resolve(files);
		});
	})
}

module.exports = { readFolder };