DROP DATABASE IF EXISTS mycompany_db;
CREATE DATABASE mycompany_db;

USE mycompany_db;

CREATE TABLE employeeNames (
    id INT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
    
);

CREATE TABLE roles (
    id INT,
    role_title VARCHAR(30) NOT NULL,
    salary INT
    
);

CREATE TABLE departments (
    id INT,
    departmant VARCHAR(30) NOT NULL
);