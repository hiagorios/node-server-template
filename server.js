const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initializing the server
const app = express();

// Allow the server receiving data as JSON
app.use(express.json());

// Adding CORS Filter
app.use(cors());

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