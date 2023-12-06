const path = require('path');

module.exports = {
    admin: (req,res) => {
        res.send('Esta es la vista de Admin desde el controller');
    },
    create: (req,res) => {
        res.send('Esta es la vista para Crear un nuevo item desde el controller');
    },
    edit: (req,res) => {
        res.send('Esta es la vista para Editar un item desde el controller');
    }
}