-- schema.sql

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

-- Seed Data for Testing
INSERT INTO users (username, email, password) VALUES 
('testuser', 'test@example.com', 'password123'),
('testuser2', 'test@example1.com', 'password123');

INSERT INTO tasks (title, completed) VALUES 
('Sample Task 1', false),
('Sample Task 2', true);
