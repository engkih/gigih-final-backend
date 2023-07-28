const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        require: true,
        type: Number
    },
    productUrl: {
        require: true,
        type: String
    },
    productTitle: {
        require: true,
        type: String
    },
    productPrice: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('Products', productSchema, 'products')