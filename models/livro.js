var restful = require('node-restful');
var mongoose = restful.mongoose;

var livroSchema = new mongoose.Schema({
	titulo: String,
	autor: String,
	editora: String,
	isbn: String,
	edicao: String,
	ano: Number,
	idioma: String, 
	preco: Number
});

module.exports = restful.model('Livros', livroSchema);