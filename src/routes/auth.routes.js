const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

router.get('/login', controller.login);
router.post('/login', (req, res) => res.send('Esta es la ruta que valida los datos del Login')); /*asociada a boton ingresar*/ 
router.get('/register', controller.register);
router.post('/register', (req, res) => res.send('Esta es la ruta que crea un nuevo user'));
router.get('/logout', controller.logout);

module.exports= router;