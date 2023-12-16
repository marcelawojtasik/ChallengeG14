const path = require('path');
const {getAll, getOne, doCreate} = require('../models/product.model');

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
    doCreate: async(req,res) => {        
        console.log(req.body);
        console.log(req.files);
        
        const product_schema = {
            product_name: req.body.productName,
            product_description: req.body.productDesc,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            sku: req.body.sku,
            dues: req.body.dues,
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,
            category_id: req.body.category,
            licence_id: req.body.licence
        }
        const result= await doCreate([Object.values(product_schema)]);
        console.log("array: " [Object.values(product_schema)]);
        console.log(result);    
        res.redirect('/admin');    
    },
    /*res.send('Esta es la ruta para Agregar un nuevo item'), asociada a boton agregar producto. Recibe datos de form en req*/
    edit: async(req,res) => {
        const {id} = req.params;
        const [product] = await getOne({product_id : id}); /*Paso el objeto con el param q quiero q tome */

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item | Funkoshop",
        product
    })
    },
    putItem: (req,res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION'), /*asociada a boton modificar producto*/
    deleteItem: (req,res) => res.send('Esta es la ruta para Borrar un item')
}