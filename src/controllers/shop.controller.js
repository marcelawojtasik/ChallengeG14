const path = require('path');

module.exports = {
    shop: (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'));
    },
    cart: (req,res) => {
        res.send('Esta es la vista del Carrito desde el controller');
    },
    item : (req,res) => {
        res.send('Esta es la vista del item seleccionado desde el controller');
    }
}