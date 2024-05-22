const fs = require("fs");

const readFolder = (folder="") => {
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