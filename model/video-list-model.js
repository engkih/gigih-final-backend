const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: Number
    },
    videoUrl: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Videos', videoSchema, 'videos');