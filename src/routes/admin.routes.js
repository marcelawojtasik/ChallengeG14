const express = require('express');
const router = express.Router();

const controller= require('../controllers/admin.controller')

router.get('/', controller.admin);
router.get('/create', controller.create);
router.post('/create', (req,res) => res.send('Esta es la ruta para Agregar un nuevo item')); /*asociada a boton agregar producto. Recibe datos de form en req*/
router.get('/edit/:id', controller.edit);
router.put('/edit/:id', (req,res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION')); /*asociada a boton modificar producto*/
router.delete('/delete/:id', (req,res) => res.send('Esta es la ruta para Borrar un item'));

module.exports= router;