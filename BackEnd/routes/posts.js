const  express = require ( 'express');
const  { createPost, getPosts, updatePost, deletePost } = require ( '../controllers/posts.js');

const  auth = require ( '../middleware/auth.js');


const router = express.Router();


// creating routes 
router.get('/', getPosts);
router.post('/', auth,  createPost);
router.patch('/:id', auth,  updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;