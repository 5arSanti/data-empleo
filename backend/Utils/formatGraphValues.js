const { getQuery } = require("../database/query");
const { formatDistinctToArray } = require("./formatDistincToArray");

const formatGraphValues = async (column, conditions) => {

	const columnValues = await formatDistinctToArray(column);

	const promises = columnValues.map(async (item) => {
		const query = `SELECT COUNT (*) AS '${item}' FROM colocaciones WHERE ${column} = '${item}' ${conditions ? ` AND ${conditions}` : ""}`;

		const [values] = await getQuery(query);

		return values;
	})
	const values = await Promise.all(promises);

	const result = values.reduce((acc, row) => {
        const key = Object.keys(row)[0];
        acc[key] = row[key];
        return acc;
    }, {});

	return result;

}

module.exports = { formatGraphValues };