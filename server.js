const express = require ('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');


// iniciando o app
const app = express();

// iniciando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true,
    useNewUrlParser: true }
);

// importando o model products para a aplicacao server.js

requireDir('./src/models');

app.use('/api', require('./src/routes'));

// ouvir a portar 3000

app.listen(3000);