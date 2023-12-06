const express = require('express');
const router = express.Router();

const controller = require('../controllers/main.controller');

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faqs', controller.faqs);


module.exports= router;