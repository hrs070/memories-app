import express from 'express';
import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/postControllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likepost', likePost);

export default router;