// src/routes/chatRoutes.ts
import { Router } from 'express';
import upload from '../middlewares/upload';
import { importChat } from '../controllers/chatController';

const router = Router();

router.post('/import', upload.single('file'), importChat);

export default router;
