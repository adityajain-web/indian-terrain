const express = require('express');
const Customer = require('../database/models/customerModel')

const router = new express.Router()

router.post("/customer", async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        const result = await newCustomer.save();
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/customer', async (req, res) => {
    try {
        if (req.query) {
            const result = await Customer.find(req.query);
            res.status(200).send(result)
        } else {
            const result = await Customer.find();
            res.status(200).send(result)
        }
    } catch (error) {
        res.status(404).send(error)
    }
});

router.patch('/customer', async (req, res) => {
    try {
        const { _id } = req.query
        if (_id) {
            const result = await Customer.findByIdAndUpdate(_id, req.body, { new: true });
            res.status(201).send(result)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/customer', async (req, res) => {
    try {
        const { _id } = req.query;
        const result = await Customer.findByIdAndDelete(_id, { new: true });
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router