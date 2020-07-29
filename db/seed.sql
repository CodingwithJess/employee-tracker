INSERT INTO department (depName)
VALUES ("Sales"), ("Marketing"), ("Finance"), ("IT"), ("Engineering"), ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 95000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Systems Admin", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Softward Engineer", 110000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Rep", 50000, 6);


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Dwight","Schrute", 1);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Michael","Scott", 2);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Pam","Beesley", 3);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Jim","Halpert", 4);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Angela","Martin", 5);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Kevin","Malone",6);