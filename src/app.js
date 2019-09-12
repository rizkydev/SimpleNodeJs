'use strict';

const express = require('express');
var bodyParser = require("body-parser");
var processData = require('./processData.js');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/processData', processData);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);