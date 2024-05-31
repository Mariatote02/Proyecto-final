// 1. Llamar la biblioteca express
const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const autorRoutes = require("./routes/autorRoutes");
const libroRoutes = require("./routes/libroRoutes");
const authRoutes = require("./routes/authRoutes");

// 2. Crear una instancia de express
const app = express();
// 2.1 configuración de mi aplicación
app.use(cors());  // poder dar acceso a otras aplicaciones (react)
app.use(express.json()); // json me permite recibir información en formato json

// 2.2. Conectar Base de datos
db.connect();

// 3. Declarar una ruta
app.get("/", (request, response) => {

  console.log(request.ip);

  // request es un objeto que contiene la información de la petición
  response.send('Bitacora de lectura');
});

// Rutas
app.use('/api/v1', autorRoutes);
app.use("/api/v1", libroRoutes);
app.use("/api/v1/auth", userRoutes);
// 4. Lanzar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});