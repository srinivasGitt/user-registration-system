import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createUser } from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json({ message: 'ALL fields are required' });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await createUser(username, email, hashedPassword);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};
