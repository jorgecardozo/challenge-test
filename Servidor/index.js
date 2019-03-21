const express = require('express');

// Import the library:
var cors = require('cors');
const app = express();

// Then use it before your routes are set up:
app.use(cors());

//Rutas
const routes = require("./routes");

//Mediante el MidleWare "USE" le pasamos la ruta
app.use('/api/items', routes);

app.listen(4000, () => {
    console.log("Servidor funcionando");
});
