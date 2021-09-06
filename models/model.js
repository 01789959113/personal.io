const mongoose = require('mongoose');


const kittySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    }, 
    message: {
        type: String, 
        required: true
    }
})

const User = mongoose.model('User', kittySchema);

module.exports = User;
