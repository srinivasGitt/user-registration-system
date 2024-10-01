// src/routes/taskRoutes.ts
import { Router } from 'express';
import { fetchTasks } from '../controllers/taskController';

const router = Router();

router.get('/tasks', fetchTasks);

export default router;
