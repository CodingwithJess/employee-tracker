const mysql = require ("mysql");
const inquirer = require ("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "5419#Mason!",
  database: "employeeTracker_DB"
});

connection.connect(function (err){
  if(err)throw err;
  start();
})

function start(){
  inquirer.prompt({
    name: "wantToDo",
    type: "list",
    message: "What would you like to do?",
    choices: ["View all employees", "View all roles", "View all departments", "Add employee", "Add role", "Add department", "Update employee role"]
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
    };
  });
};

function allEmployees(){
  connection.query("SELECT * FROM employee", function (err,res){
    if (err){
      throw err
    }else {
      console.log(res)
    }
  });
};

function allRoles(){
  connection.query("SELECT * FROM role", function (err,res){
    if (err){
      throw err
    }else {
      console.log(res)
    }
  });
};

function allDepartments(){
  connection.query("SELECT * FROM department", function (err,res){
    if (err){
      throw err
    }else {
      console.log(res)
    }
  });
};


// addEmployee();
// addRole();
// addDepartment();
// updateEmployee();