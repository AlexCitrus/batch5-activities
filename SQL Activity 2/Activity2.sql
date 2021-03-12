
-- Display the count of all Students
SELECT COUNT(id) NumOf_Students FROM students;


--Select all Students with location is Manila
SELECT * FROM students 
WHERE location = 'Manila';


--Display the average age of all students. 
SELECT AVG(age) Average_Age FROM students;


--Display all students by age descending. 
SELECT * FROM students
ORDER BY age DESC;