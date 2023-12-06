const path = require('path');

module.exports = {
    home: (req,res) => 
        res.render('index', {
            title: "Home | Funkoshop"
        }),
    contact: (req,res) => res.send('Esta es la vista de Contacto'),
    about: (req,res) => res.send('Esta es la vista sobre nosotros '),
    faqs: (req,res) => res.send('Esta es la vista de preguntas frecuentes')
}