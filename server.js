var express = require('express');
var cors = require('cors');
var	mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/rest_test_db');
mongoose.connect('mongodb://mongo/rest_test_db');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('API is running on port 3000');
