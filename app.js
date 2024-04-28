const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./router'));
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log('SERVER coriendo en ${port}');
});

