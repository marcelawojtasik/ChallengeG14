const path = require('path');
const {getAll} = require('../models/product.model');

module.exports = {
    admin: async(req,res) => {
        const data = await getAll();
          
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin | Funkoshop",
        data
    })
    },
    create: (req,res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
        title: "Crear Item | Funkoshop"
    }),
    doCreate: (req,res) => res.send('Esta es la ruta para Agregar un nuevo item'), /*asociada a boton agregar producto. Recibe datos de form en req*/
    edit: (req,res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item | Funkoshop"
    }),
    putItem: (req,res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION'), /*asociada a boton modificar producto*/
    deleteItem: (req,res) => res.send('Esta es la ruta para Borrar un item')
}