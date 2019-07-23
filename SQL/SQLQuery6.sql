--Select all from EmployeeMaster 
select * from EmployeeMaster

--Select all from Projects
select * from Projects

--Select all from PunchCard
select * from PunchCard

/*Select count value
of all the records in 
project table*/
select count(Task_ID) AS project from Projects;

-- Select all the task ID greater than 1
SELECT Task_ID, COUNT(Task_ID) from Projects group by Task_ID having  Task_ID   > 1

/*Selecting difference of Start_Date in 
project table*/
SELECT a1.Start_Date, DATEDIFF(DAY, a1.Start_Date, a2.Start_Date) as Difference from Projects a1 inner join Projects a2 on a2.Task_ID=a1.Task_ID+5 

/*Selecting difference of End_Date in 
project table*/
SELECT a1.End_Date, DATEDIFF(DAY, a1.End_Date, a2.End_Date) as Difference from Projects a1 inner join Projects a2 on a2.Task_ID=a1.Task_ID+5 

--Count of project
select count( * ) as  Task_ID FROM Projects
count(24);

  SELECT OrderDate,OrderNo
     FROM orders
     WHERE OrderDate BETWEEN '{$startDate}' AND '{$endDate}'
     ORDER BY OrderDate ASC