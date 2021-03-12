CREATE TABLE classrooms(id INTEGER, student_id INTEGER, section VARCHAR(20));

INSERT INTO classrooms(id, student_id, section)
VALUES(2, 2, 'A'),
(3, 3, 'B'),
(4, 4, 'C'),
(5, 5, 'B'),
(6, 6, 'A'),
(7, 7, 'C'),
(8, 8, 'B'),
(9, 9, 'B'),
(10, 10, 'C');

-- Inner Join
SELECT * 
FROM students AS a 
INNER JOIN classrooms AS b 
ON a.id = b.id;

-- Left Join
SELECT * 
FROM classrooms AS a 
LEFT JOIN students AS b 
ON a.id = b.id;

-- Right Join
SELECT first_name, last_name,section 
FROM students 
RIGHT JOIN classrooms 
ON students.id = classrooms.id;

-- Full Join
SELECT * FROM
    classrooms
FULL JOIN students 
    ON classrooms.id = students.id;