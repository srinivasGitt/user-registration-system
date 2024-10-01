import { createPool, RowDataPacket, OkPacket, ResultSetHeader } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Function to create a new task
export const createTask = async (title: string) => {
    // Capture both the result and the field metadata
    const [result]: [ResultSetHeader, any] = await pool.query(
        'INSERT INTO tasks (title) VALUES (?)',
        [title]
    );

    // result.insertId will give you the ID of the newly inserted task
    return result.insertId;
};

// Function to get tasks
export const getTasks = async (completed: boolean | null) => {
    const query = completed !== null ? 'SELECT * FROM tasks WHERE completed = ?' : 'SELECT * FROM tasks';
    const params = completed !== null ? [completed] : [];
    
    // Capture both the rows and the field metadata
    const [rows]: [RowDataPacket[], any] = await pool.query(query, params);
    
    return rows; // Return all tasks found
};
