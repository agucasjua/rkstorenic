const express = require('express');
const app = express();
import {PORT} from './config'

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./router'));
app.use(express.static('public'));

app.listen(PORT);

