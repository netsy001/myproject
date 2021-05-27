import express from 'express';
import { createPosts, getPosts } from '../controllers/posts.js';
const router = express.Router();


// creating routes 
router.get('/', getPosts);
router.post('/', createPosts);

export default router;