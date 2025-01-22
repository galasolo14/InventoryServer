const mongoose = require('mongoose');

const UnitsSchema = new mongoose.Schema({
    name: String,
    budget: Number,
})


module.exports = UnitsSchema;