var express = require('express');
var cors = require('cors');
var	mongoose = require('mongoose');
var bodyParser = require('body-parser');

var swaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

//Local
//mongoose.connect('mongodb://localhost/rest_test_db');
//Docker
mongoose.connect('mongodb://mongo/rest_test_db');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', require('./routes/api'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1', require('./routes/api'));

app.listen(3001);
console.log('API is running on port 3001');
