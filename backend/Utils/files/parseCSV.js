const csv = require("fast-csv");
const fs = require("fs");

const parseCSV = async (filePath, columns) => {
	try {
		return new Promise((resolve) => {
			const log = {
				correctRows: [],
				incorrectRows: [],
				error: []
			}

			fs.createReadStream(filePath)
				.pipe(csv.parse({ headers: columns, strictColumnHandling: true }))
				.on('error', (err) => {
					log.error.push(err.message);
				 })
				.on('data', (row) => {
					log.correctRows.push(row);
				})
				.on('data-invalid', (row) => {
					log.incorrectRows.push(row);
				})
				.on('end', (rowCount) => {
					console.log(`Parsed ${rowCount} rows`);

					resolve(log);
				});
		})
	}
	catch (err) {
		throw new Error(err.message)
	}
}

module.exports = { parseCSV };