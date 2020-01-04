const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, resp) {
        const products = await Product.find();
        return resp.json(products);
    },
};