const mongoose = require('mongoose')
const ItemsSchema = require('../models/items.model')

const ItemsModel = mongoose.model("items", ItemsSchema)

const getAllItems = async () => {
    try {
        const items = await ItemsModel.find({});
        return (items)
    } catch (err) {
        console.log(err)
    }  
}

const addItem = async (item) => {
    const { description, quantity, price, expirationDate, type, damaged} = item
    try {
        const addItem = new ItemsModel({ 
            description: description,
            quantity: quantity,
            price: price,
            expirationDate: expirationDate,
            type: type,
            damaged: damaged
        });
        await addItem.save();
    } catch (err) {
        console.log(err)
    }
}

const deleteItem = async (itemId) => {
    try {
        const deleted = await ItemsModel.deleteOne({ _id: itemId});
        return (deleted);
    } catch (err) {
        throw err;
    }
}

const subtractItems = async (itemId, quantity) => {
    try {
        const updated = await ItemsModel.findOneAndUpdate({ _id: itemId}, {$inc: {quantity: -quantity}});
        return (updated);
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllItems, addItem, deleteItem, subtractItems }