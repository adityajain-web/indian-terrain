const express = require('express');
require('dotenv').config()
require('./database/conn');
const Customer = require('./database/models/customerModel');
const customerRouter = require('./router/customerRouter')

const app = express();
app.use(express.json())
app.use(customerRouter)

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => res.send('success'))

app.listen(PORT, (err) => err ? console.log(err) : console.log(`server running on port ${PORT}`))