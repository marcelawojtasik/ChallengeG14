const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Esta es la vista de Login'));
router.post('/login', (req, res) => res.send('Esta es la ruta que valida los datos del Login')); /*asociada a boton ingresar*/ 
router.get('/register', (req, res) => res.send('Esta es la vista de Register'));
router.post('/register', (req, res) => res.send('Esta es la ruta que crea un nuevo user'));
router.get('/logout', (req, res) => res.send('Esta es la ruta que desloguea al user'));

module.exports= router;