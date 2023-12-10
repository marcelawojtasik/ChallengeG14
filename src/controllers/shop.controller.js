const path = require('path');

module.exports = {
    shop: (req,res) => {

        const data = [
            {
            product_id: 1,
            licence_name: "Pokemon",
            category_name: "Figuras coleccionables",
            product_name: "Pidgeotto",
            product_description: "Figura coleccionable Pokemon",
            product_price: 1799.99,
            dues: 3,
            product_sku: "PKM001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 2,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Hermione",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 5799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 3,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Luna Lovegood",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 3799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 4,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Harry Potter",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 3799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 5,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Luna Lovegood",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 3799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 6,
            licence_name: "Pokemon",
            category_name: "Figuras coleccionables",
            product_name: "Pidgeotto",
            product_description: "Figura coleccionable Pokemon",
            product_price: 1799.99,
            dues: 3,
            product_sku: "PKM001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 7,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Hermione",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 5799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
            product_id: 8,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Luna Lovegood",
            product_description: "Figura coleccionable Harry Potter",
            product_price: 3799.99,
            dues: 6,
            product_sku: "HP0001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            ]

        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Shop | Funkoshop", 
            data
        });
    },
    cart: (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: "Carrito de compras | Funkoshop"
        });
    },
    addToCart:(req,res) => res.send('Esta es la ruta para agregar un item al carrito - desde el Controller'),
    item: (req,res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item | Funkoshop"
        });
    },
    addItem: (req,res) => res.send('Esta es la ruta para agregar un nuevo item - desde el Controller')
}