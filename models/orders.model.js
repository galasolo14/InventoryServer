const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    items: Array,
    statusDone: Boolean,
    totalPrice:  Number,
    unitId: String
})


module.exports = OrdersSchema;