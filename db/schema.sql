DROP DATABASE IF EXISTS mycompany_db;
CREATE DATABASE mycompany_db;

USE mycompany_db;

CREATE TABLE department (
    id INT NOT NULL,
    PRIMARY KEY(id),
    departmant VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL,
    PRIMARY KEY (id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL
    -- department INT,
    --     FOREIGN KEY (department)
    --     REFERENCES department(id)
    --     ON DELETE SET NULL
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles INT NOT NULL
    --     FOREIGN KEY (roles)
    --     REFERENCES roles(id)
    --     ON DELETE SET NULL
);

