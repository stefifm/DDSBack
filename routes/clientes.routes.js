const express = require("express");
const { getClienteByApellidoNombre } = require("../controllers/clientes.controllers.js");
const router = express.Router();

router.get("/api/clientes", getClienteByApellidoNombre);

module.exports = router;
