const express = require('express');
const router = express.Router();
const Videos = require('../model/video-list-model');
const Products = require('../model/product-list-model');
const Comments = require('../model/comment-list-model');
const Users = require('../model/user-model');

//res video data
router.get('/', async (req, res) => {
    try{
        const videos = await Videos.find({},'videoUrl');
        res.json(videos)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

//res product list and comment list inside video page
router.get('/:videoid', async (req, res) => {
    let videoid = req.params.videoid
    // let videoid = parseInt(req.params.videoid);
    console.log(req.params.videoid)
    try{
        const comments = await Comments.find({videoId: videoid});
        const products = await Products.aggregate([{ $sample: { size: 4}}]);
        res.json({products,comments})
    }
    catch(error){
        res.status(500).json({message: error.message});
    }


});


//post new comment
router.post('/:videoid/:username', async (req, res) => {
    let videoid = req.params.videoid;
    let username = req.params.username
    // let userid = parseInt(req.params.username);
    // const usernameFind = await Users.findOne({userId: userid});
    const commentReq = req.body.comment;
    const comment = new Comments ({
        videoId: videoid,
        // userId: userid,
        username: username,
        comment: commentReq,
        timestamp: new Date()
    })
    try {
        const commentToSave = comment.save();
        res.status(200).json(commentToSave)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})


module.exports = router;