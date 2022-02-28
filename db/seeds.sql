INSERT INTO department(department_name)
VALUES
  ('Human Resources'),
  ('Castomer Contacts'),
  ('It'),
  ('Management'),
  ('Risc Management'),
  ('Front desc'),
  ('Security'),
  ('Service');

INSERT INTO role(title, salary, department_id)
VALUES
  ('HR Manager',70000.00,1),
  ('HR Firs',50000.00,1),
  ('HR Second',45000.00,1),
  ('CC Manager',60000.00,2),
  ('CC First',40000.00,2),
  ('IT Lead',100000.00,3),
  ('IT First',80000.00,3),
  ('IT Second',60000.00,3),
  ('IT Intern',40000.00,3),
  ('Head Manager',120000.00,4),
  ('Riscs Head',100000.00,5),
  ('Riscs First',80000.00,5),
  ('FD First',60000.00,6),
  ('Fd Second',40000.00,6),
  ('Security Head',100000.00,7),
  ('Security Front',60000.00,7),
  ('Servise Front',60000.00,8);

INSERT INTO employee( first_name, last_name, role_id, manager_id )
VALUES
  ('George','Spark',1,NULL),
  ('Aaron','Miller',2,NULL),
  ('Nikole','Katimova',3,NULL),

  ('Ashly','Mancia',4,NULL),
  ('Oliveer','Kahn',5,NULL),

  ('Marko','Baske',6,NULL),
  ('Raul','Markes',7, NULL),
  ('Artur','Poll',8,NULL),
  ('Avet','Pambukchyan',9,NULL),

  ('Hillary','Frost',10,NULL),

  ('Jake','Collince',11,NULL),
  ('Tonny','Jakeson',12,NULL),
  
  ('Ninella','Hopp',13,NULL),
  ('Connor','Been',14,NULL),

  ('Derec','Beckhem',15,NULL),
  ('Nursultan','Hakimi',16,NULL),

  ('Vivian','Araqelyan',17,NULL);
  