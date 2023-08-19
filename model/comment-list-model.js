const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: String
    },
    userId: {
        required: false,
        type: Number
    },
    username: {
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