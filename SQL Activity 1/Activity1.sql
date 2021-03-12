CREATE TABLE students(
	id INT, first_name VARCHAR(255),middle_name VARCHAR(255),last_name VARCHAR(255),age INT, location VARCHAR(255)
);



--  Insert 6 records 

INSERT INTO students(id, first_name, middle_name, last_name, age, location) 
VALUES(1,'Juan','Blank','Cruz',18,'Manila'),
(2,'John','Blank','Young',20,'Manila'),
(3,'Victor','Blank','Rivera',21,'Manila'),
(4,'Adrian','Blank','Co',19,'Laguna'),
(5,'Pau','Blank','Riosa',22,'Marikina'),
(6,'Piolo','Blank','Pascual',25,'Manila');

--  Update first record 

UPDATE students
SET first_name = "Ana", middle_name="Cui", last_name="Cajocson", age=25, location="Bulacan"
WHERE id = 1;


--  Delete last record 

DELETE FROM students
WHERE id = 6;