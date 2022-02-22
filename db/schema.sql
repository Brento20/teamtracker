DROP DATABASE IF EXISTS mycompany_db;
CREATE DATABASE mycompany_db;

USE mycompany_db;

CREATE TABLE employee_names (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    
);