const mysql = require ("mysql");
const inquirer = require ("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "5419#Mason!",
  database: "employeeTracker_DB"
});

connection.connect((err) => {
  if(err)throw err;
  start();
})
// initial question with all options
const start = () => {
  inquirer.prompt({
    name: "wantToDo",
    type: "list",
    message: "What would you like to do?",
    choices: ["View all employees", "View all roles", "View all departments","View all employees by department","Add employee", "Add role", "Add department", "Update employee role", "Exit"]
  })
  .then(function(answer){
    switch (answer.wantToDo){
      case "View all employees":
        allEmployees();
        break;
      case "View all roles":
        allRoles();
        break;
      case "View all departments":
        allDepartments();
        break;
      case "View all employees by department":
        employeeByDep();
        break;
      case "Add employee":
        addEmployee();
        break;
      case "Add role":
        addRole();
        break; 
      case "Add department":
        addDepartment();
        break;
      case "Update employee role":
        updateEmployee();
        break;
      default:
        connection.end();
      };   
  });
};

// viewing all categories
const allEmployees = () => {
  connection.query("SELECT * FROM employee",(err,res) => {
    if (err){
      throw err
    }else {
      console.table(res)
      start();
    }
  });
};

const allRoles = () => {
  connection.query("SELECT * FROM role",(err,res) => {
    if (err){
      throw err
    }else {
      console.table(res)
      start();
    }
  });
};

const allDepartments = () => {
  connection.query("SELECT * FROM department",(err,res) => {
    if (err){
      throw err
    }else {
      console.table(res)
      start();
    }
  });
};

// const employeeByDep = () => {
//   inquirer.prompt([
//     {
//       type: "list",
//       name: "byDepartment",
//       message: "Choose department to view",
//       choices: ["Sales","Marketing","Finance", "IT", "Engineering", "Customer Service"]
//     },
//   ])
//   connection.query("SELECT first_name, last_name, name FROM employee INNER JOIN department ON employee.department_id = department.id WHERE department.name =?", [department], (err, data) => {
//     if (err) throw err;
//     console.table(data);
//     start();
//   })
// }

// adding categories
const addEmployee = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?"
    },
    {
      type: "input",
      name: "employeeRoleID",
      message: "What is the employee's roleID?"
    },
  ]).then(function(answer){
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.employeeRoleID,
      },
      function (err){
        if (err) throw err;
        console.log("New employee added!");
        start();
      }
    );
  });
};

const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the new role?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary?"
    },
    {
      type: "input",
      name: "departmentID",
      message: "What is the department ID?"
    },
  ]).then(function(answer){
    connection.query(
      "INSERT INTO role SET ?",
      {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.departmentID,
      },
      function (err){
        if (err) throw err;
        console.log("New role added!");
        start();
      }
    );
  });
};

const addDepartment = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "depName",
      message: "What is the new department name?"
    },
  ]).then(function(answer){
    connection.query(
      "INSERT INTO department SET ?",
      {
        depName: answer.depName,
      },
      function (err){
        if (err) throw err;
        console.log("New department added!");
        start();
      }
    );
  });
};

// updating categories
const updateEmployee = () => {
  inquirer.prompt([
    {


    },
  ])
};