const express = require("express");
const { connection } = require("../../database");

const { getQuery } = require("../../database/query");
const { obtenerFechaHoraHoy } = require("../../DateFunctions");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const query = "SELECT * FROM slider_data";
		const sliderData = await getQuery(query)

		return response.status(200).json({sliderData: sliderData})
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.post("/", async (request, response) => {

	try {
		const query = "INSERT INTO slider_data (`NOMBRE`,`VALOR`,`PORCENTAJE`, `ICONO`, `FECHA_CREACION`) VALUES (?,?,?,?,?)";

		const fechaActual = obtenerFechaHoraHoy();

		const values = {
			name: request.body.name,
			numericValue: request.body.numericValue,
			percentValue: request.body.percentValue,
			icon: request.body.icon,
			creationDate: fechaActual,
		}

		const arrayValues = Object.values(values);
		const filterConditions = arrayValues.some((key) => values[key] === null)

		if (filterConditions) {
			return response.json({ Error: "No pueden haber campos vacios" })
		}

		connection.query(query, arrayValues, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
