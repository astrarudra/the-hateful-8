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

/* Ordering  In_Time and Out_Time
by ascending order*/ 
  SELECT In_Time,Out_Time
     FROM PunchCard
     WHERE In_Time BETWEEN '2019-07-23 10:06:00.0000000' AND '2019-07-23 19:09:00.0000000'
     ORDER BY In_Time ASC

	 --selecting workhour of emplyoyee master
	 select Name,WorkHour
	 from EmployeeMaster
	     where  WorkHour between '1' and '11'


	--showing the difference of date	 
DECLARE @FromDate DATETIME = '2014-12-31', 
        @ToDate DATETIME = '2015-01-01'
SELECT @FromDate 'From Date', @ToDate 'To Date',
 DATEDIFF(YEAR, @FromDate, @ToDate)
   -
 (CASE
   WHEN DATEADD(YEAR, 
           DATEDIFF(YEAR, @FromDate,@ToDate), @FromDate)
       > @ToDate THEN 1 
         ELSE 0 END) 'Date difference in Years'