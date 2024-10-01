// src/controllers/taskController.ts
import { Request, Response } from 'express';
import { getTasks } from '../models/Task';

export const fetchTasks = async (req: Request, res: Response) => {
    const { status } = req.query;
    const completed = status === 'completed' ? true : status === 'pending' ? false : null;

    const tasks = await getTasks(completed);
    res.json(tasks);
};
