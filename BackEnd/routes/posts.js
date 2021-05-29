import express from 'express';
import { createPosts, getPosts, updatePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';


const router = express.Router();


// creating routes 
router.get('/', getPosts);
router.post('/', auth,  createPosts);
router.patch('/:id', auth,  updatePost);
router.delete('/:id', auth, deletePost);

export default router;