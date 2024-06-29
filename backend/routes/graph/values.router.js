const express = require("express");
const { formatGraphValues } = require("../../Utils/formatGraphValues");
const { formatToQuery } = require("../../Utils/formatToQuery");
const { formatValuesForGraph } = require("../../Utils/formatValuesForGraph");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const { column, mes_coloca, anio_coloca  } = request.query;

		const conditions = formatToQuery(request.query, ["column"])

		const values = await formatGraphValues(column, conditions, mes_coloca, anio_coloca);

		const graphValues = formatValuesForGraph(values);

		return response.json({graphValues: graphValues})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;
