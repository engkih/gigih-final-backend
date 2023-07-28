const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: Number
    },
    userId: {
        required: true,
        type: Number
    },
    userName: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    timestamp: Date
});

module.exports = mongoose.model('Comments', commentSchema, 'comments')