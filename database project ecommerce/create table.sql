CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	email VARCHAR(30) UNIQUE NOT NULL,
	full_name VARCHAR(20) NOT NULL,
	age INT CHECK (age >=18),
	salary NUMERIC (10,2) DEFAULT 40000,
	CONSTRAINT chk_salary CHECK(salary>0) 
);

select * from employee;

CREATE TABLE DEPARTMENT (
	id serial PRIMARY KEY
);

SELECT * FROM DEPARTMENT;
ALTER TABLE employee ADD COLUMN department_id INT; 
ALTER TABLE employee ADD CONSTRAINT department_id_detail FOREIGN KEY (department_id) REFERENCES department(id);