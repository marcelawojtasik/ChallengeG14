const express = require('express');
const router = express.Router();

const controller = require('../controllers/shop.controller');

router.get('/', controller.shop);
router.get('/item/:id', controller.item);
router.post('/item/:id/add', (req,res) => res.send('Esta es la ruta para agregar un nuevo item'));
router.get('/cart', controller.cart);
router.post('/cart', (req,res) => res.send('Esta es la ruta para agregar un item al carrito'));

module.exports= router;