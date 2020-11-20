const express = require('express');
const app = express();
const path = require("path");

const cartRouter = require ('./routes/cartRouter');
const productsRouter = require ('./routes/productRouter');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){
    res.render(path.join(__dirname, '/views/index.ejs'))
});

app.use('/products', productsRouter);
   
app.use('/cart', cartRouter);

app.get('/register', function(req,res){
    res.render(path.join(__dirname, '/views/registro.ejs'))
});

app.get('/login', function(req,res){
    res.render(path.join(__dirname, '/views/login.ejs'))
});

app.listen(3000, function(){
    console.log('Birras llegando..');
})