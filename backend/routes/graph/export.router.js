const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const { year, month } = request.query;

		const query = `SELECT * FROM graficas WHERE  AÑO = ${year} AND MES = ${month} ORDER BY FECHA_CREACION DESC LIMIT 6`;

		const result = await getQuery(query);

		return response.json({exportGraphs: result.reverse()})

	} catch (err) {
		return response.json({Error: err.message});
	}
});


module.exports = router;
