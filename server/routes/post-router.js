const express = require('express');
const router = express.Router();

const PostCtrl = require('../controllers/post-controller');


router.post('/post', PostCtrl.createPost);
router.put('/post/:id', PostCtrl.updatePost);
router.delete('/post/:id', PostCtrl.deletePost);
router.get('/post/:id', PostCtrl.getPostById);
router.get('/posts', PostCtrl.getPosts);

module.exports = router
