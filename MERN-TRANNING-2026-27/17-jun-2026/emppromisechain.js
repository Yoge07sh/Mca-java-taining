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
function getEmployee(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let emp = employees.find((employee) => employee.eid === id);
            if(!emp) {
                reject("Employee Not Found....")
            } else {
                resolve(emp);
            }
        }, 5000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve, reject) => {
        let basicSalary = 0;
        setTimeout(() => {
            if(post == 'CEO') {
            basicSalary = 56000;
        } else if(post == 'Manager') {
            basicSalary = 50000;
        } else if(post == 'HR') {
            basicSalary = 30000;
        } else {
            basicSalary = 25000
        }
        resolve(basicSalary)
        }, 3000)  
    });
    return pr;
}
function getCalculateSalary(basicSalary) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let grossSalary = 0;
            grossSalary = basicSalary + basicSalary * .50 + basicSalary * .70 + 6000;
            resolve(grossSalary)
        }, 2000)
    });
    return pr;
}
getEmployee('e001')
.then((emp) => {
    console.log(emp)
    return getBasicSalary(emp.post)
})
.then((basicSalary) => {
    console.log(basicSalary)
    return getCalculateSalary(basicSalary)
}) 
.then((grossSalary) => {
    console.log(grossSalary)
})
.catch((error) => {
    console.log(error);
})