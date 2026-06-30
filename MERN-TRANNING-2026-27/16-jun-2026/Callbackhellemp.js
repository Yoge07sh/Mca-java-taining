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
function getEmployee(id, callback) {
    setTimeout(() => {
       let emp = employees.find((employee) => employee.eid === id)
       callback(emp)
    }, 5000)
}
function getBasicSalary(post, callback) {
    let basicSalary = 0;
    setTimeout(() => {
      if(post == 'CEO') {
         basicSalary = 10000
      } else if(post == 'Assistant Professor') {
         basicSalary = 56000
      } else if(post == 'Manager') {
         basicSalary = 25000
      } else if(post == 'HR') {
         basicSalary = 20000
      } else {
        basicSalary = 15000
      }
      //console.log(basicSalary);
      callback(basicSalary)
    }, 3000)
}
function calculateSalary(basicSalary) {
    let grossSalary = 0;
    hra = basicSalary * .40;
    da = basicSalary * .80;
    fixedAmount = 5000;
    grossSalary = basicSalary + hra + da
    console.log(grossSalary)
}
getEmployee('e010', (emp) => {
    console.log(emp);
    getBasicSalary(emp.post, (basicSalary) => {
        console.log(basicSalary)
        calculateSalary(basicSalary)
    })
});




