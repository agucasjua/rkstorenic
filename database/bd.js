const mysql = require('mysql');

const conexion  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'rkstorebdnic'
});

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: ' +error);
        return
    }
    console.log('¡Conectado a la BD MySQL!');
});

module.exports = conexion;