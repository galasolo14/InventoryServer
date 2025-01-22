const mongoose = require('mongoose')

const OrdersSchema = require('../models/orders.model')

const OrdersModel = mongoose.model("orders", OrdersSchema)


const getAllOrders = async () => {
    try {
        const items = await OrdersModel.find({});
        return (items)
    } catch (err) {
        console.log(err)
    }  
}

const addOrder = async (order) => {
    const { items, statusDone, totalPrice, unitId} = order
    try {
        const addOrder = new OrdersModel({ items: items, statusDone: false, totalPrice: totalPrice, unitId: unitId });
        await addOrder.save();
    } catch (err) {
        console.log(err)
    }
}

const deleteOrder = async (itemId) => {
    try {
        const deleted = await OrdersModel.deleteOne({ _id: itemId});
        return (deleted);
    } catch (err) {
        throw err;
    }
}

const orderDone = async (itemId) => {
    try {
        const done = await OrdersModel.findByIdAndUpdate({ _id: itemId}, {statusDone: true});
        return (done);
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllOrders, addOrder, deleteOrder, orderDone }