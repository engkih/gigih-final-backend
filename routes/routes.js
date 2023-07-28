const express = require('express');
const router = express.Router();
const Videos = require('../model/video-list-model');
const Products = require('../model/product-list-model');
const Comments = require('../model/comment-list-model');
const Users = require('../model/user-model');

//res video data
router.get('/', async (req, res) => {
    try{
        const videos = await Videos.find({},'videoId videoUrl');
        res.json(videos)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

//res product list and comment list inside video page
router.get('/:videoid', async (req, res) => {
    let videoid = parseInt(req.params.videoid);
    try{
        const comments = await Comments.find({videoId: videoid}, 'userName comment timestamp');
        const products = await Products.aggregate([{ $sample: { size: 4}}]);
        res.json({products,comments})
    }
    catch(error){
        res.status(500).json({message: error.message});
    }


});

//post new comment
router.post('/:videoid/:userid', async (req, res) => {
    let videoid = parseInt(req.params.videoid);
    let userid = parseInt(req.params.userid);
    const usernameFind = await Users.findOne({userId: userid});
    const commentReq = req.body.comment;
    const comment = new Comments ({
        videoId: videoid,
        userId: userid,
        userName: usernameFind.userName,
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