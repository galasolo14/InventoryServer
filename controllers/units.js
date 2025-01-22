
const express = require('express');
const router = express.Router();
const { getAllUnits, addBudget, removeBudget } = require('../services/units')

router.get('/getUnits', async (req, res) => {
    try {
        const unitsList = await getAllUnits();
        return res.json({unitsList});
    } catch(err) {
        return res.sendStatus(400);
    }
});

router.post('/addBudget/:id', async (req, res) => {
    const { id } = req.params
    const { total } = req.body
        try {
            const unit = await addBudget(id, total);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

router.post('/removeBudget/:id', async (req, res) => {
    const { id } = req.params
    const { total } = req.body
        try {
            const unit = await removeBudget(id, total);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
});

module.exports = router;