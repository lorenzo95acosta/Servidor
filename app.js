//Descargo los modulos necesarios
const express = require('express');
const fs = require('fs');
const cors = require('cors');

//Creo variables e instancias para utilizar los modulos
let app = express();
let PORT = 3000;

//Inicializo el cors para poder tratar los JSON
app.use(cors());
//
app.use(express.urlencoded());
app.use(express.json());
//Desafiate
app.post('/compra', (req, res)=>{
    let datos = req.body;
    console.log(datos);
})


//Creo que el Routing

        //Categorias
        let category = fs.readFileSync('category/1234.json');
        let categoryObj = JSON.parse(category);
        let allCategories = fs.readFileSync('category/all.json');
        let allCategoriesObj = JSON.parse(allCategories);

        app.get('/allCategories', (req, res)=>{
            res.send(JSON.stringify(allCategoriesObj));
            })
        app.get('/category', (req, res)=>{
            res.send(JSON.stringify(categoryObj));
            })

        //Carrito y mensaje de compra
        let cart = fs.readFileSync('cart/654.json');
        let cartObj = JSON.parse(cart);
        let msg = fs.readFileSync('cart/buy.json');
        let msgObj = JSON.parse(msg);

        app.get('/cart', (req, res)=>{
            res.send(JSON.stringify(cartObj));
            })
        app.get('/buyMsg', (req, res)=>{
            res.send(JSON.stringify(msgObj));
            })

        //Productos
        let product = fs.readFileSync('product/all.json');
        let productObj = JSON.parse(product);
        let productInfo = fs.readFileSync('product/5678.json');
        let productInfoObj = JSON.parse(productInfo);
        let commentsProduct = fs.readFileSync('product/5678-comments.json');
        let commentsProductObj = JSON.parse(commentsProduct);

        app.get('/allProducts', (req, res)=>{
            res.send(JSON.stringify(productObj));
            })
        app.get('/commentProduct', (req, res)=>{
            res.send(JSON.stringify(commentsProductObj));
            })
        app.get('/productInfo', (req, res)=>{
            res.send(JSON.stringify(productInfoObj));
            })

//Inicio el servidor en el puerto cargado anteriormente
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})