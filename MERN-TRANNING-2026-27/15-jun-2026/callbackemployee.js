let employees = [
    {
        name: 'Mohit',
        age: 23,
        salary: 4500,
        mobileno: 98989898
    },
    {
        name: 'Fardeen',
        age: 22,
        salary: 6500,
        mobileno: 90000987
    },
    {
        name: 'Gourav',
        age: 22,
        salary: 90000,
        mobileno: 99999778
    },
    {
        name: 'Rajesh',
        age: 25,
        salary: 5000,
        mobileno: 789878800
    },
    {
        name: 'Vishal',
        age: 24,
        salary: 6000,
        mobileno: 90876555
    }
]
let newEmployee = {
        name: 'Rehan',
        age: 21,
        salary: 4550,
        mobileno: 88779900
}
function addEmployee(newEmployee, callback) {
    setTimeout(() => {
        console.log("Adding employee");
        employees.push(newEmployee);
        console.log("Employee Added...");
        callback()
    },10000);
}   
function displayEmployee() {
    console.log("Employee List....")
    employees.forEach((employee) => {
        console.log(employee);
    })
}
//addEmployee(newEmployee, displayEmployee);
addEmployee(newEmployee, () => {
     console.log("Employee List....")
    employees.forEach((employee) => {
        console.log(employee);
    })
})