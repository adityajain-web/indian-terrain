const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/customer').then(() => console.log('connection successful')).catch(err => console.log(err))