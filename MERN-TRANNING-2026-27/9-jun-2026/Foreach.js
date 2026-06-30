let employees = [
    {
        name: 'Gourav',
        age: 23,
        salary: 56000
    },
    {
        name: 'Mohit',
        age: 30,
        salary: 51000
    },
    {
        name: 'Ganesh',
        age: 24,
        salary: 53000
    },
    {
        name: 'Ram',
        age: 25,
        salary: 54000
    }
]
// foreach loop
let sum = 0
employees.forEach((employee)=> {
   console.log(employee.name)
   sum = sum + employee.salary;
})
console.log("Sum of Salary = " + sum);
let filteredEmployee = []
employees.forEach((employee) => {
    if(employee.salary > 52000) {
        filteredEmployee.push(employee)
    }
})
console.log("Filtered Employee = ", filteredEmployee)