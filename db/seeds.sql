USE mycompany_db;
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE employee;
TRUNCATE roles;
TRUNCATE department;
SET FOREIGN_KEY_CHECKS=1;

INSERT INTO department (id, departmant)
VALUES  (201, "Entertainment "),
        (202, "Landscape "),
        (203, "Chaos Department ");

INSERT INTO roles (id, title, salary, departmant)
VALUES  (101, "Accountant", 90000, 201),
        (102, "Dancer", 65000, 201),
        (103, "Topiary Artist", 145000, 202),
        (104, "Production", 45000, 203);

INSERT INTO employee (id, first_name, last_name, roles)
VALUES  (1, "Liam ", "O'Kane ", 101),
        (2, "Chris ", "Le Page ", 104),
        (3, "Rachel ", "Pearson ", 101),
        (4, "Matthew ", "Lawson ", 103),
        (5, "Adam ", "Pearson ", 103),
        (6, "Gina ", "Rose Drew ", 102),
        (7, "Lilly ", "Tomlin ", 104);