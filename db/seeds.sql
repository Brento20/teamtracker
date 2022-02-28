USE mycompany_db;
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE employee;
TRUNCATE roles;
TRUNCATE departments;


INSERT INTO departments (departmant_name)
VALUES  ("Entertainment "),
        ("Landscape "),
        ("Chaos Department ");

INSERT INTO roles (title, salary, departmant_id)
VALUES  ("Accountant", 90000, 3),
        ("Dancer", 65000, 1),
        ("Topiary Artist", 145000, 2),
        ("Production", 45000, 3);

INSERT INTO employee (first_name, last_name, roles_id)
VALUES  ("Liam ", "O'Kane ", 1),
        ("Chris ", "Le Page ", 4),
        ("Rachel ", "Pearson ", 1),
        ("Matthew ", "Lawson ", 3),
        ("Adam ", "Pearson ", 3),
        ("Gina ", "Rose Drew ", 2),
        ("Lilly ", "Tomlin ", 4);