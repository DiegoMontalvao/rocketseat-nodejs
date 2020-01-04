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

const Product = mongoose.model('Product');

// ouvir a portar 3000

app.listen(3000);

// criando a primeira rota get

app.get('/', (req, resp) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return resp.send('Hello Diego');
});
