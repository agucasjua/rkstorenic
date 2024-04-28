const express = require('express');
const router  = express.Router();

const conexion = require('./database/bd');

//RUTA RAIZ
router.get('/', (req, res)=>{
    res.render('index');
});
//RUTA RAIZ INDEX 
router.get('/index', (req, res)=>{
    res.render('index');
});
//RUTA RAIZ ACCESO ADMIN
router.get('/login', (req, res)=>{
    res.render('login');
});

//RUTA FORM CONTACTO
router.get('/Contacto', (req, res)=>{
    res.render('Contacto');
});



//RUTA PARA MOSTRAR LISTADO DE USUARIOS
router.get('/listadoUser',(req, res)=>{
    
    conexion.query('SELECT * FROM Usuarios', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('listadoUser', {results:results});
        }
    })
});

//RUTA PARA MOSTRAR LISTADO DE PRODUCTOS
router.get('/listadoProductos',(req, res)=>{
    
    conexion.query('SELECT * FROM productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('listadoProductos', {results:results});
        }
    })
});

router.get('/Catalogo', (req, res) => {
    conexion.query('SELECT * FROM productos', (error, results) => {
      if (error) {
        throw error;
      } else {
        // Fetch image data and add it to the product object
        results.forEach((productos) => {
          const imageQuery = 'SELECT imagenProduc FROM productos WHERE idProducto = ?';
          conexion.query(imageQuery, [productos.idProducto], (imageError, imageResults) => {
            if (imageError) {
              throw imageError;
            } else {
                productos.imagenProduc = imageResults[0].imagenProduc;
            }
          });
        });
  
        // After all image data is fetched, render the EJS template
        setTimeout(() => {
          res.render('Catalogo', { results: results });
        }, 100);
      }
    });
  });

//RUTA PARA MOSTRAR LISTADO DE PRODUCTOS
router.get('/Catalogo',(req, res)=>{
    
    conexion.query('SELECT * FROM productos', (error, result)=>{
        if(error){
            throw error;
        }else{
            res.render('Catalogo', {result:result});
        }
    })
});



//RUTA PARA CREAR REGISTROS
router.get('/create', (req, res)=>{
    res.render('create');
});

//RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM Usuarios WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    });
});

const crud = require('./controllers/crud');

module.exports = router;