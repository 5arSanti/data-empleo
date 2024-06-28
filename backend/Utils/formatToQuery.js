const formatToQuery = (query, except) => {
	const formated = Object.keys(query)
		.filter((key) => !except.includes(key) && key == null && key == "")
		.map((key) => `${key} = '${query[key]}'`)
		.join(" AND ");

	return formated;
}

module.exports = { formatToQuery };