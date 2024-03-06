const express = require("express");
const vacantesRouter = require("./vacantes.router");
const departamentosRouter = require("./departamentos.router")
const filtersRouter = require("./filters.router")
const userRouter = require("./user.router.js")


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/vacantes", vacantesRouter);
	router.use("/departamentos", departamentosRouter);
	router.use("/filters", filtersRouter);

	router.use("/user", userRouter);
}

module.exports = routerApi;