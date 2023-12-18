const mysql = require('mysql2');

const pool = mysql.createPool({
    user: 'root',
    password: 'Root5715',
    host: 'localhost',
    port: 3306,
    database: 'funkodb',
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