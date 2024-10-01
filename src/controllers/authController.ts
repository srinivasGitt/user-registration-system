import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../models/User';

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.json({ token });
};
