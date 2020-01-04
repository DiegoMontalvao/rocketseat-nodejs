const express = require ('express');
const mongoose = require ('mongoose');

// iniciando o app
const app = express();

// iniciando o DB

mongoose.connect('mongodb://locahost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(3000);

app.get('/', (req, resp) => {
    resp.send('Hello Diego');
});
