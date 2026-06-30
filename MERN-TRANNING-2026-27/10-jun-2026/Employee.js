let employees = [
    {
        empName: 'Gourav Kumar',
        age: 22,
        salary: 20000,
        location: 'Ghaziabad'
    },
    {
        empName: 'Arun',
        age: 44,
        salary: 45000,
        location: 'Lucknow'
    },
    {
        empName: 'Daksh',
        age: 40,
        salary: 35000,
        location: 'Meerut'
    },
    {
        empName: 'Raja',
        age: 42,
        salary: 22990,
        location: 'Lucknow'
    },
    {
        empName: 'Ganesh',
        age: 35,
        salary: 7700,
        location: 'Delhi'
    }
]
let data = employees.filter(employee => employee.age > 40 && employee.location == 'Lucknow')
console.log(data)