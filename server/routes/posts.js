import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

// add the routes 
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);




export default router;