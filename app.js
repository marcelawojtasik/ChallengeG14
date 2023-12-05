const express = require('express');
const app = express();

const PORT = 3004;

app.use(express.static('public'));

app.listen(PORT, ()=> console.log(`Servidor corriendo en 👻 http://localhost:${PORT}`));