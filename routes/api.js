var express = require('express');
var router = express.Router();

//var Product = require('../models/product');
var Livro = require('../models/livro');

//Product.methods(['get', 'put', 'post', 'delete']);
//Product.register(router, '/products');

Livro.methods(['get', 'put', 'post', 'delete']);
Livro.register(router, '/livros');

module.exports = router;