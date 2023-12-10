const express = require('express');
const router = express.Router();

const {admin, create, doCreate, edit, putItem, deleteItem}= require('../controllers/admin.controller')

router.get('/', admin);
router.get('/create', create);
router.post('/create', doCreate); 
router.get('/edit/:id', edit);
router.put('/edit/:id', putItem),
router.delete('/delete/:id', deleteItem);

module.exports= router;