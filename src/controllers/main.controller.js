module.exports = {
    home: (req,res) => res.send('Esta es la vista de Home'),
    contact: (req,res) => res.send('Esta es la vista de Contacto'),
    about: (req,res) => res.send('Esta es la vista sobre nosotros '),
    faqs: (req,res) => res.send('Esta es la vista de preguntas frecuentes')
}