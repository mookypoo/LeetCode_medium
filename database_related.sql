# 176. Second Highest Salary
# https://leetcode.com/problems/second-highest-salary/description/

SELECT max(salary) as SecondHighestSalary from Employee where salary < (SELECT max(salary) from Employee);

# 184. Department Highest Salary
# https://leetcode.com/problems/department-highest-salary/description/

SELECT d.name as Department, e.name as Employee, e.salary as Salary FROM Employee e
JOIN Department d 
ON e.departmentId = d.id
WHERE e.salary = (SELECT max(salary) FROM Employee WHERE departmentId = e.departmentId);
