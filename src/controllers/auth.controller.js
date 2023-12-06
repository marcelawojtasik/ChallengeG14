//const path = require('path');

module.exports = {
    login: (req,res) => {
        res.send('Esta es la vista de Login desde el controller');
    },
    register:  (req,res) => {
        res.send('Esta es la vista de Registro desde el controller');
    },
    logout:  (req,res) => {
        res.send('Esta es la ruta de Logout desde el controller');
    },
}