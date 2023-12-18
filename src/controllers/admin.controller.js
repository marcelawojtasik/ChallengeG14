const path = require('path');
const {getAll, getOne, doCreate, deleteOne, edit} = require('../models/product.model');


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
            image_front: '/'+ req.files[0].filename,
            image_back: '/'+ req.files[1].filename,
            category_id: req.body.category,
            licence_id: req.body.licence
        }
        const result= await doCreate([Object.values(product_schema)]);
        console.log("array: " [Object.values(product_schema)]);
        console.log(result);    
        res.redirect('/admin');    
    },

    edit: async(req,res) => {
        const {id} = req.params;
        const [product] = await getOne({product_id : id}); /*Paso el objeto con el param q quiero q tome */

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item | Funkoshop",
        product
    })
    },

    putItem: async(req,res) => {
        const {id} = req.params;
        console.log("id", req.params);
        console.log("Body : ", req.body);
        console.log("Files", req.files);
        
        const haveImages = req.files.length !== 0;

        const product_schema = haveImages
        ? {
            product_name: req.body.productName,
            product_description: req.body.productDesc,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            sku: req.body.sku,
            dues: req.body.dues,
            image_front: '/'+ req.files[0].filename,
            image_back: '/'+ req.files[1].filename,
            category_id: req.body.category,
            licence_id: req.body.licence
        }
        : {
            product_name: req.body.productName,
            product_description: req.body.productDesc,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            sku: req.body.sku,
            dues: req.body.dues,
            category_id: req.body.category,
            licence_id: req.body.licence
        };
        const result = await edit(product_schema, {product_id: id});
        console.log(result);
        res.redirect('/shop'); 
    },
        
    deleteItem: async(req,res) => {
        const {id} = req.params;
        await deleteOne({product_id: id});
        res.redirect('/admin');
    }
    
}