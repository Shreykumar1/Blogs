const express = require('express');
const { getAllPosts, getSinglePost, createPost, deletePost, updatePost} = require('../controllers/postController');

const router = express.Router();


router.route('/posts').get(getAllPosts).post(createPost);
router.route('/posts/:id').get(getSinglePost).patch(updatePost).delete(deletePost);


module.exports = router;