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

const getOne= async(id) => {
    try{
    const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?', id);
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

module.exports = {
    getAll,
    getOne

const getAll = async() => {
    const data = await conn.query('SELECT * FROM product');

    return data;
} 

module.exports = {
    getAll

}