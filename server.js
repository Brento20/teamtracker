const express = require('express');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
var colors = require('colors');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');
const { type } = require('express/lib/response');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql2.createConnection(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    console.log(colors.rainbow("*************************\n*************************\n* WELCOME TO MY COMPANY *\n*************************\n*************************\n"))
);

function startPrompt() {   
    inquirer.prompt([
    {
    type: "rawlist",
    message: "What would you like to do?",
    name: "choice",
    choices: [
            "Add New Employee",
            "Add New Role",
            "View All Employees",
            "Update Employee Profile",
            "Group Employees By Roles",
            "Goodbye",
            ]
    }
])
        .then( answer => {
        switch (answer.choice) {

            case 'Add New Employee':
                console.log(colors.bold('\n \n NEW EMPLOYEE ENTRY \n'));
                addEmployee();
                break;

            case 'Add New Role':
                console.log(colors.bold('\n \n NEW ROLE CREATOR \n'));
                addRole();
                break;

            case 'View All Employees':
                console.log(colors.bold('\n \n ALL EMPLOYEES \n'));
                viewAllEmployee();
                break;

            case 'Group Employees By Roles':
                console.log(colors.bold('\n \n ALL EMPLOYEES WITH ROLES \n'));
                groupEmployeeRole();
                // write a function to show all employees grouped by role in the database then call the start prompt function again
                break;

            case 'Goodbye':
                endProcess();
                break;

            default:
                console.log(`ERROR: I dont even know how you got here?!`);
        }
    })
};

function viewAllEmployee() {
    db.query('SELECT * FROM employee', function (err, results) {
    if (err) throw err;
    console.table(results);
    startPrompt();
    });
};

function groupEmployeeRole() {
    db.query('SELECT * FROM roles', function (err, results) {
    if (err) throw err;
    console.table(results);
    startPrompt();
    });

};

function addEmployee() {

    inquirer.prompt([
        {
            type: "input",
            message: "Employee's First Name?",
            name: "firstName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Name field cannot be empty!");
                    addEmployee();
                    return false;
                }}
        },
        {
            type: "input",
            message: "Employee's Last Name?",
            name: "lastName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Name field cannot be empty!");
                    addEmployee();
                    return false;
                }}
        },
        {
            type: "rawlist",
            message: "Employee's Role?",
            name: "role",
            choices: [
                "Accountant", 
                "Dancer",
                "Topiary Artist", 
                "Production",
                ]
        }

    ])
    .then(answers => {
        const  {firstName, lastName, role} = answers; 

        switch (role) {
            case 'Accountant':
                var roleID = '101'
                break;
            case 'Dancer':
                var roleID = '102'
                break;
            case 'Topiary Artist':
                var roleID = '103'
                break;
            case 'Production':
                var roleID = '104'
                break;
        }
        
        db.query(`INSERT INTO mycompany_db.employee (first_name, last_name, roles) VALUES('${firstName}', '${lastName}', ${roleID});`, function (err, results) {
        if (err) throw err;
        console.log(colors.green(`${firstName} ${lastName} added to Employee Database! `))
        startPrompt();
    });
})};

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, 
        {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }
    ]).then(function (answers) {
        db.query("INSERT INTO roles (title, salary, department_id) values (?, ?)", [answers.title, answers.salary], function (err, data) {
        if (err) throw err;
        console.table(results);
        })
        startPrompt();
    })

}


startPrompt();

function endProcess(){    
    console.log(colors.rainbow("*************************\n*************************\n* THANK YOU COME AGAIN! *\n*************************\n*************************\n"))
    db.quit()
};

app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
});