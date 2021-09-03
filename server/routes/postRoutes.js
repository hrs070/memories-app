import express from 'express';
import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/postControllers.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);

export default router;