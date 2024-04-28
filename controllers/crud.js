const conexion = require('../database/bd');
const express = require('express');


const app = express();

exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    conexion.query('INSERT INTO usuarios SET ?', {nombreUser:nombre,apellidoUser:apellido,usernameLog:usuario,passwordLog:clave}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    conexion.query('UPDATE Usuarios SET ? WHERE id = ?', [{nombreUser:nombre, apellidoUser:apellido, usernameLog:usuario,passwordLog:clave},id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}
