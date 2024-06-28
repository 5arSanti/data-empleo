const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
	try {
		const filterCondition = Object.keys(request.query)
			.filter((key) => request.query[key] !== "")
			.map((key) => `${key} = '${request.query[key]}'`)
			.join(" AND ");

		const query = `SELECT SUM (*) FROM colocaciones WHERE ${filterCondition ? filterCondition : ""}`

		return response.json({query: query})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;
