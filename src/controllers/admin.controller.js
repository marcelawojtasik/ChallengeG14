const path = require('path');

module.exports = {
    admin: (req,res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin | Funkoshop"
    }),
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