const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')

const MONGODB = 'mongodb+srv://galit:1414@cluster0.qqbhm.mongodb.net/inventory';
const post = process.env.PORT || 3005;

const itemsController = require('./controllers/items')
const unitsController = require('./controllers/units')
const ordersController = require('./controllers/orders')

const app = express()
app.use(cors())
app.use(bodyParser.json());


const init = async () => {
    await mongoose.connect(MONGODB);
    app.listen(post, (err) => console.log('Server up'));
};

init();

app.use('/items', itemsController);
app.use('/unit', unitsController);
app.use('/order', ordersController);

app.get('/test', (req, res) => {
    return res.json({ a: 1, b: 2 });
});

