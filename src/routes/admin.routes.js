const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../middlewares/uploadFiles');
const {admin, create, doCreate, edit, putItem, deleteItem}= require('../controllers/admin.controller')

router.get('/', admin);
router.get('/create', create);
router.post('/create', upload.array('images',2), doCreate); 
router.get('/edit/:id', edit);
router.put('/edit/:id', upload.array('images',2), putItem),
router.delete('/delete/:id', deleteItem);

module.exports= router;