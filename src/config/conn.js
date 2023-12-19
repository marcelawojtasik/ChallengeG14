const mysql = require('mysql2');
require('dotenv').config();
const PORT = process.env.PORT;

const pool = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0 /*cant conex en espera: infinitas*/
});

pool.getConnection((err, conn)=>{
    if (err) {
        console.log('Error al conectarse con BD: ' + err)
    } else {
        console.log('Conexion exitosa a BD');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
}