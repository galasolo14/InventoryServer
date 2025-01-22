
const express = require('express');
const router = express.Router();
const { getAllOrders, addOrder, deleteOrder, orderDone } = require('../services/orders')
const {removeBudget} = require('../services/units')
const {subtractItems} = require('../services/items')


router.get('/getOrders', async (req, res) => {
    try {
        const orderList = await getAllOrders();
        return res.json({orderList});
    } catch(err) {
        return res.sendStatus(400);
    }
});

router.post('/addOrder', async (req, res) => {
    const { data } = req.body
        try {
            const order = await addOrder(req.body.data);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

router.delete('/deleteOrder/:id', async (req, res) => {
    const { id } = req.params
        try {
            const order = await deleteOrder(id);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

router.patch('/orderDone/:id', async (req, res) => {
    const { id } = req.params
        try {
            const order = await orderDone(id);
            if(order){
                order.items.map(async (item) => {
                    const updated = await subtractItems(item.itemId, item.quantity)
                })
                const unit = await removeBudget(order.unitId, order.totalPrice)
                return res.sendStatus(200);
            }
            
        } catch(err) {
            return res.sendStatus(400);
        }
});

module.exports = router;