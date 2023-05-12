import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'; // only "posts" instad of "posts.js" will fail in Node

const router = express.Router();
// The codes for all of these routes are stored in controllers/posts
router.get('/', getPosts) // localhost:5000/posts
router.post('/', createPost) // localhost:5000/posts

export default router;