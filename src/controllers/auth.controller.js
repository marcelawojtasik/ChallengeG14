const path = require('path');

module.exports = {
    login: (req,res) => 
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: "Login | Funkoshop"
        }),
    doLogin: (req, res) => res.send('Esta es la ruta que valida los datos del Login - desde el Controller'), /*asociada a boton ingresar*/
    register: (req,res) => 
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
            title: "Registro | Funkoshop"
        }),
    doRegister: (req, res) => res.send('Esta es la ruta que crea un nuevo user - desde el Controller'),
    logout:  (req,res) => 
        res.send('Esta es la ruta de Logout desde el controller')
    }