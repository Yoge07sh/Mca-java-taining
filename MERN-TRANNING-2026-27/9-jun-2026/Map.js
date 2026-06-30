// Map always returns a new array which size is equal to calling array.
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
let names = employees.map((employee) => {
    //if(employee.salary > 52000) {
        return 'Mr.' + employee.name
   // } 
})
console.log(names)