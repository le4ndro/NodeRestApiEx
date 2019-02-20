/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { port, mongodbUri } = require('./config/config');

mongoose.connect(`${mongodbUri}`);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1', require('./routes/api'));

app.listen(port);
console.log(`API is running on port ${port}`);
