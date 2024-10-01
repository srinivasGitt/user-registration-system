// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', chatRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
