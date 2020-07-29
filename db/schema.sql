DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department(
  id INTEGER NOT NULL AUTO_INCREMENT,
  depName VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary INT default 0,
  department_id INTEGER(10),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  role_id INTEGER (10),
  manager_id INTEGER (10),
  PRIMARY KEY (id)
);

