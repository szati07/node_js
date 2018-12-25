const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);


module.exports = class Cart {

    static addProduct(id) {
        // Fetch previous cart
        // Analyze the cart => Finde existing product
        // Add new product / increase quantity
    }

}