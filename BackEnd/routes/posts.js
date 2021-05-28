import express from 'express';
import { createPosts, getPosts, updatePost, deletePost } from '../controllers/posts.js';
const router = express.Router();


// creating routes 
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;