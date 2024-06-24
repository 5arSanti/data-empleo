const { getQuery } = require("../database/query");

const insertColocacionesInDB = async (log) => {
	try {
		if (!(log.correctRows)) { return };
		let promises = [];

		const array = log.correctRows;

		array.map(async (item, index) => {
			if (index == 0) { return; }

			promises.push((async () => {

				const keys = Object.keys(item).join(", ");
				const values = Object.values(item).map(item => typeof item === 'string' ? `'${item}'` : item).join(", ");

				await getQuery(`INSERT INTO colocaciones (${keys}) VALUES (${values})`);
			})());
		});

		await Promise.all(promises);
		return;
	}
	catch (err) {
		throw new Error(err);
	}


}

module.exports = { insertColocacionesInDB };