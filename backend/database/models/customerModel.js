const mongoose = require('mongoose');
const validator = require('validator')

const customerModel = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        minLength: [3, "Invalid firstname"],
        validate(value) {
            if (!value.match(/^[A-Za-z]+$/)) throw new Error('Invalid firstname')
        },
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        minLength: [3, "Invalid firstname"],
        validate(value) {
            if (!value.match(/^[A-Za-z]+$/)) throw new Error('Invalid firstname')
        },
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("invalid error")
        },
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: [8, "invalid password"],
        maxLength: [16, "invalid password"],
        required: true
    }
})

const Customer = new mongoose.model('Customer', customerModel);

module.exports = Customer