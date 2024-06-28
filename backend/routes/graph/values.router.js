const express = require("express");
const { formatGraphValues } = require("../../Utils/formatGraphValues");
const { formatToQuery } = require("../../Utils/formatToQuery");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const { column } = request.query;

		const conditions = formatToQuery(request.query, [column])

		const values = await formatGraphValues(column, conditions);

		return response.json({graphValues: values})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;
