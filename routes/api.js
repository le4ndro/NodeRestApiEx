var express = require('express');
var router = express.Router();

var Livro = require('../models/livro');

Livro.methods(['get', 'put', 'post', 'delete']);
Livro.register(router, '/livro');

module.exports = router;
