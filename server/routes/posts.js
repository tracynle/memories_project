import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// add the routes for CRUD
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); // updating existiing post
router.delete('/:id', deletePost);

router.patch('/:id/likePost', likePost); // updates the number of likes for the post


export default router;