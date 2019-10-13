const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initializing the server
const app = express();

// Initializing DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
);

requireDir('./src/models');

// Routes
app.use('/server', require('./src/routes'));

app.listen(3001);