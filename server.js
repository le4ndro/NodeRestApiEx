/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Local
// mongoose.connect('mongodb://localhost/rest_test_db');
// Docker
mongoose.connect('mongodb://mongo/rest_test_db');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1', require('./routes/api'));

app.listen(3001);
console.log('API is running on port 3001');
