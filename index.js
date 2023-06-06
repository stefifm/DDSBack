const express = require("express");
const cors = require("cors");
const app = express();

// leer archivo de configuracion
require("dotenv").config();

// crear base si no existe
require("./base-orm/sqlite-init");

// para poder leer json en el body
app.use(express.json());

// Configuración de CORS
app.use(cors());

// Configuración de rutas
<<<<<<< HEAD
const routes = require("./routes/articulos");
const clientesRoutes = require("./routes/clientes.routes.js");
app.use("/", routes);
app.use(clientesRoutes);
=======
const routeArticulos = require('./routes/articulos');
app.use('/', routeArticulos);

>>>>>>> refs/remotes/origin/main
// Inicio del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;
