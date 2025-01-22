const mongoose = require('mongoose')
const UnitsSchema = require('../models/units.model')

const UnitsModel = mongoose.model("units", UnitsSchema)

const getAllUnits = async () => {
    try {
        const units = await UnitsModel.find({});
        return (units)
    } catch (err) {
        console.log(err)
    }  
}

const addBudget = async (id, total) => {
    try {
        const addBudget = await UnitsModel.findOneAndUpdate({ _id: id }, {$inc: {budget: total}});
        return (addBudget)
    } catch (err) {
        console.log(err)
    }
}

const removeBudget = async (id, total) => {
    try {
        const removeBudget = await UnitsModel.findOneAndUpdate({ _id: id }, {$inc: {budget: -total}});
        return (removeBudget)
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllUnits, addBudget, removeBudget }