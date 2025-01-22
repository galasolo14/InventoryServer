
const express = require('express');
const router = express.Router();
const { getAllItems, addItem, deleteItem } = require('../services/items')

router.get('/getItems', async (req, res) => {
    try {
        const itemsList = await getAllItems();
        return res.json({itemsList});
    } catch(err) {
        return res.sendStatus(400);
    }
});

router.post('/addItem', async (req, res) => {
    const { data } = req.body
        try {
            const item = await addItem(req.body.data);

            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

router.delete('/deleteItem/:id', async (req, res) => {
    const { id } = req.params
        try {
            const item = await deleteItem(id);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

module.exports = router;