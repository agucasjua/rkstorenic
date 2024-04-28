const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./router'));
app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log('SERVER coriendo en http://localhost:5000');
});

