const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('Esta es la vista de Admin'));
router.get('/create', (req,res) => res.send('Esta es la vista para Crear un nuevo item'));
router.post('/create', (req,res) => res.send('Esta es la ruta para Agregar un nuevo item')); /*asociada a boton agregar producto. Recibe datos de form en req*/
router.get('/edit/:id', (req,res) => res.send('Esta es la vista para Editar un item'));
router.put('/edit/:id', (req,res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION')); /*asociada a boton modificar producto*/
router.delete('/delete/:id', (req,res) => res.send('Esta es la ruta para Borrar un item'));

module.exports= router;