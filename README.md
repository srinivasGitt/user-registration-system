# User Registration System

A simple user registration system built with Node.js, Express, and TypeScript. This application allows users to register, log in, and manage tasks. It uses MySQL as the database to store user and task information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Running the Application](#running-the-application)
- [License](#license)

## Features

- User registration with hashed passwords
- User login with JWT authentication
- Task management (create, get tasks)
- Data stored in MySQL

## Technologies Used

- Node.js
- Express
- TypeScript
- MySQL
- bcryptjs
- jsonwebtoken
- dotenv
- mysql2/promise

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or above)
- MySQL server running locally or remotely
- Postman or similar tool for testing API endpoints

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-registration-system
Install the required packages:

bash
Copy code
npm install
Create a .env file in the root directory and add your database configuration:

plaintext
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
Run the SQL scripts to create the necessary tables in your MySQL database:

sql
Copy code
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);
API Endpoints
User Registration
POST /api/register
Request Body:
json
Copy code
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
User Login
POST /api/login
Request Body:
json
Copy code
{
  "email": "test@example.com",
  "password": "password123"
}
Task Management
POST /api/tasks

Request Body:
json
Copy code
{
  "title": "New Task"
}
GET /api/tasks

Query Parameters (optional):
completed (boolean)
Database Schema
users

id: INT (Primary Key, Auto Increment)
username: VARCHAR(50)
email: VARCHAR(100) (Unique)
password: VARCHAR(255)
tasks

id: INT (Primary Key, Auto Increment)
title: VARCHAR(255)
completed: BOOLEAN (Default: FALSE)
Running the Application
To start the server, run the following command:

bash
Copy code
npx tsx src/index.ts
The server will start on http://localhost:5000.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Notes:
- Update the `<repository-url>` placeholder with the actual URL of your repository.
- Add more details as needed based on your application's functionality or structure.
- You can include sections for testing, contribution guidelines, or any other relevant informatio