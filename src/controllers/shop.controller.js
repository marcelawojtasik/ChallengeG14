const path = require('path');

module.exports = {
    shop: (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Shop | Funkoshop"
        });
    },
    cart: (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: "Carrito de compras | Funkoshop"
        });
    },
    item : (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item | Funkoshop"
        });
    }
}