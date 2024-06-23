const { getQuery } = require("../database/query");

const getColumnNames = async (tableName="colocaciones") => {
	const columns = await getQuery(`SHOW COLUMNS FROM ${tableName}`);
	const formatedColumns = columns.map(row => row.Field).filter(column => column !== "id");

	return formatedColumns;
}

module.exports = { getColumnNames };