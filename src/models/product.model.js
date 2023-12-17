const {conn} = require('../config/conn');

//consulta a la BBDD y su query - Agrego "try/catch" para manejo de errores y q no se rompa app
/*const getAll = async() => {
    try{
    const [rows] = await conn.query('SELECT * FROM product');
    return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Error detectado: ' + error
        }
   }finally {
    conn.releaseConnection();
   }    
} */

const getAll = async() => {
    try{
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id');
    return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Error detectado: ' + error
        }
   }finally {
    conn.releaseConnection();
   }    
} 

const getOne= async(param) => {
    try{
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
    return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Error detectado: ' + error
        }
   }finally {
    conn.releaseConnection();
   }    
} 

const doCreate = async (params) => {
    try {
        const [product] = await conn.query('INSERT INTO product( product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, category_id, licence_id) VALUES ?;', [params]);
        return product;
    } catch (error) {
        return {
            error: true,
            message: "Error catastrófico: " + error
        }
    }finally{
        conn.releaseConnection();
    }
}

const deleteOne = async (params) => {
    try {
        const [product] = await conn.query('DELETE FROM product WHERE ?', [params]);
        return product;
    } catch (error) {
        return {
            error: true,
            message: "Error catastrófico: " + error
        }
    }finally{
        conn.releaseConnection();
    }
}


module.exports = {
    getAll,
    getOne,
    doCreate,
    deleteOne
}