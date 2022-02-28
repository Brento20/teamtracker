# Team Tracker v1.0

## **Description** 

This application will help managers and employers track the roles of staff across several catagories. 
It uses MYSQL for database building and store data as well as node.js to run command line javascript.

## Demo Video: 
https://youtu.be/wGjbByp4B3I

# Dependencies/NPM assets used
**NPM:**

**colors** - This is used to allow us to create visual feedback that helps with readability.

**console.table** - Also helps with visibility by rendering objects and arrays as tables to show data relationships.

**dotenv** - allows us to create a environment to store password and other credentials that wont be posted to remote repositories.

**As well as:**
- **node.js**
- **Express.js**
- **inquirer**
- **mysql2**

<br>

# Installation 

***prior to installing please install node.js and mysql***

1. Download the repository.
2. Install dependencies by running "npm install" in the root directory of this application.
3. Create a dotenv (.env) file and include you're credentials in the following format:

>*"DB_PASSWORD=*******
>
>*DB_USER=root*
>
>*DB_NAME=mycompany_db"*
4. Using the source command in mysql, run the schema.sql ***then*** seeds.sql files in the repo.

5. Start the application using "NPM Start" in te command line.

<br>


# To Do:

|Task|Status|
|---- |:----: |
|Host repo on github |Done|
|Create schema.sql and seeds.sql file |Done|
|When the applications is run the user is given options|Done|
|User can view all employees|Done|
|User can create new employees|Done|
|User can view relationships between employees, roles and departments|TBD|
|User can update employee details | TBD|
|Video link is added to README.md|TBD|

