import { createPool, RowDataPacket, OkPacket, ResultSetHeader } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Function to create a new user
export const createUser = async (username: string, email: string, password: string) => {
    // Capture both the result and the field metadata
    const [result]: [ResultSetHeader, any] = await pool.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password]
    );
    
    // result.insertId would give you the ID of the newly inserted row
    return result.insertId;
};

// Function to find a user by email
export const findUserByEmail = async (email: string) => {
    // Capture both the rows and the field metadata
    const [rows]: [RowDataPacket[], any] = await pool.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    return rows[0]; // Return the first user, if found
};
