let employees = [
    {
        empId: 101,
        empName: 'yogesh',
        empPost: 'developer'

    },
    {
        empId: 102,
        empName: 'ganesh',
        empPost: 'tester'

    },
    {
        empId: 103,
        empName: 'gourav',
        empPost: 'Hr'


    },
    {
        empId: 104,
        empName: 'mohit',
        empPost: 'manager'

    },
    {
        empId: 105,
        empName: 'rajesh',
        empPost: 'Asst.professer'

    }
]
function getEmp(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let emp = employees.find((employee) => employee.empId === id);
            if (emp) {
                resolve(emp);
            } else {
                reject("employee not found...");
            }
        }, 3000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve, reject) => {
        let basicSalary = 0;
        setTimeout(() => {
            if (post === 'developer') {
                basicSalary = 60000;
            } else if (post === 'tester') {
                basicSalary = 50000;
            } else if (post === 'Hr') {
                basicSalary = 40000;
            } else if (post === 'manager') {
                basicSalary = 70000;
            } else {
                basicSalary = 100000;
            }
            resolve(basicSalary);
        }, 2000)
    });
    return pr;
}
function getHRA(basicSalary) {
    let pr = new Promise((resolve, reject) => {
        let HRA = 0;
        setTimeout(() => {
            if (basicSalary > 50000) {
                HRA = 15000;
            } else if (basicSalary >= 30000 && basicSalary < 50000) {
                HRA = 12000;
            } else {
                HRA = 10000;
            }
            resolve(HRA);
        }, 1000)
    });

    return pr;
}
function calculateSalary(basicSalary, HRA) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let grosssalary = basicSalary + HRA + basicSalary * .10;
            resolve(grosssalary);
        }, 1000)
    });
    return pr;
}
const salarySummary = async()=> {
    try {
        let emp = await getEmp(105);
        console.log(emp);
        let basicsalary = await getBasicSalary(emp.post);
        console.log(basicsalary);
        let HRA = await getHRA(basicsalary);
        console.log(HRA);
        let finalsalary = await calculateSalary(HRA, basicsalary);
        console.log(finalsalary);

    } catch (err) {
        console.log("not found in db...");
    }
}
salarySummary();