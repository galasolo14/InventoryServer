const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    description: String,
    quantity: Number,
    price:  Number,
    expirationDate: String,
    type: String,
    damaged: Boolean
})


module.exports = ItemsSchema;