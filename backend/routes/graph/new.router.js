const express = require("express");
const { connection } = require("../../database");

const { obtenerFechaHoraHoy } = require("../../DateFunctions/index");
const { validateObjectValues } = require("../../Utils/validateObjectValues");

const router = express.Router();

router.post("/", (request, response) => {
	try {
		const query = "INSERT INTO graficas (`TITULO_GRAFICA`,`AÑO`,`MES`, `TIPO_DATOS`, `TIPO_GRAFICA`, `DESCRIPCION`, `FECHA_CREACION`, `DATOS`) VALUES (?,?,?,?,?,?,?,?)";

		const fechaActual = obtenerFechaHoraHoy();

		const graphValues = {
			title: request.body.title,
			year: request.body.year,
			month: request.body.month,
			grapLabelsType: request.body.grapLabelsType,
			graphType: request.body.graphType,
			description: request.body.description,
			date: fechaActual,
			values: "",
		}

		validateObjectValues(graphValues)
		const values = Object.values(graphValues);

		connection.query(query, values, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success", message: "Gráfica creada correctamente" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});


module.exports = router;
