const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Number
    },
    userName: {
        required : true,
        type: String
    }
    
})

module.exports = mongoose.model('Users', userSchema, 'users')