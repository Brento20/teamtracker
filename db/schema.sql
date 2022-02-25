DROP DATABASE IF EXISTS mycompany_db;
CREATE DATABASE mycompany_db;

USE mycompany_db;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    departmant_id INT
);

CREATE TABLE department (
    id INT PRIMARY KEY,
    departmant VARCHAR(30) NOT NULL
);