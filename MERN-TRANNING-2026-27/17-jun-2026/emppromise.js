// problem statement
// we will make two function, addEmployee() which will 3 sec
// another function displayEmployee() which will take zero second

let employees = [
    {
        eid: 'e001',
        ename: 'Aman',
        mobileno: 9090987600,
        post: 'Worker'
    },
    {
        eid: 'e002',
        ename: 'Raju',
        mobileno: 9039944884,
        post: 'Developer'
        
    },
    {
        eid: 'e003',
        ename: 'Seema',
        mobileno: 7237502776,
        post: 'HR'
    },
    {
        eid: 'e004',
        ename: 'Gourav Kumar',
        mobileno: 7969698590,
        post: 'CEO'
    },
    {
        eid: 'e005',
        ename: 'Tanisha',
        mobileno: 6396000023,
        post: 'Manager'
    },
    {
        eid: 'e006',
        ename: 'Fardeen',
        mobileno: 7597583959,
        post: 'Project Manager'
    },
    {
        eid: 'e007',
        ename: 'Divya',
        mobileno: 8990998887,
        post: 'Professor'
    },
    {
        eid: 'e008',
        ename: 'Reena',
        mobileno: 9898002314,
        post: 'Employee'
    },
    {
        eid: 'e009',
        ename: 'Shivani',
        mobileno: 890003245,
        post: 'Boss'
    },
    {
        eid: 'e010',
        ename: 'Mohit',
        mobileno: 8899007766,
        post: 'Assistant Professor'
    },
]
let newEmployee = {
    eid: 'e011',
    ename: 'Rohit',
    mobileno: 8899002266,
    post: 'Developer'
}
function addEmployee(newEmployee) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(newEmployee);
            resolve(employees)
        }, 3000)
    });
    return pr;
}
addEmployee(newEmployee)
.then((result) => {
    console.log(result)
}) 
.catch((err) => {
    console.log(err)
})





