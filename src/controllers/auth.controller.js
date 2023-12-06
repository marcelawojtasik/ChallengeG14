const path = require('path');

module.exports = {
    login: (req,res) => 
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: "Login | Funkoshop"
        }),
    register: (req,res) => 
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
            title: "Registro | Funkoshop"
        }),
    logout:  (req,res) => 
        res.send('Esta es la ruta de Logout desde el controller')
    }