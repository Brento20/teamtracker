const express = require('express');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql2.createConnection(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    console.log("Welcome to my company")
);


function startPrompt() {   
    inquirer.prompt([
    {
    type: "rawlist",
    message: "What would you like to do?",
    name: "choice",
    choices: [
            "View All Employees", 
            "Group Employees By Roles",
            "Group Employees By Department", 
            ]
    }
])
        .then( answer => {
        switch (answer.choice) {
            case 'View All Employees':
                console.log('******************************\n******************************\n******************************\n');
                viewAllEmployee();
                // write a function to show all employees in the database then call the start prompt function again
                break;
            case 'Group Employees By Roles':
                console.log('option2');
                groupEmployeeRole();
                // write a function to show all employees grouped by role in the database then call the start prompt function again
                break;
            case 'Group Employees By Department':
                console.log('option3');
                groupEmployeeDep();
                // write a function to show all employees grouped by department in the database then call the start prompt function again
                break;
            default:
                console.log(`Unable to select options for ${choices}`);
        }
    })
};

function viewAllEmployee() {
    db.query('SELECT * FROM employeeNames', function (err, results) {
    console.table(results);
    startPrompt();
    });
};

function groupEmployeeRole() {

};

function groupEmployeeDep() {

};

//Things go here

app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
});

startPrompt();