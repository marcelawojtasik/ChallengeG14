const path = require('path');

module.exports = {
    admin: (req,res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin | Funkoshop"
    }),
    create: (req,res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
        title: "Crear Item | Funkoshop"
    }),
    edit: (req,res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item | Funkoshop"
    }),
}