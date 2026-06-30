//1 students = [{}, {}, {}, {}]
  // name, email, mobileNo, age
  // 2) newstudent -> add which will take 5 sec
  // reject (if age > 17) else resolve 

  let students = [
    {
        name: 'Ayush',
        email: 'ayush01@yopmail.com',
        mobileNO: 990000999,
        age: 22
    },
    {
        name: 'Rajesh',
        email: 'rajesh02@yopmail.com',
        mobileNO: 78900099,
        age: 25
    },
    {
        name: 'Fardeen',
        email: 'fardeen03@yopmail.com',
        mobileNO: 900087654,
        age: 23
    },
    {
        name: 'Gourav',
        email: 'gourav04@yopmail.com',
        mobileNO: 89900088,
        age: 23
    },
    {
        name: 'Arun',
        email: 'arun05@yopmail.com',
        mobileNO: 899990008,
        age: 21
    },
  ]
  let newStudent = {
     name: 'Amit',
     email: 'amit06@yopmail.com',
     mobileNO: 899990008,
     age: 18
  };
  function addStudent(newStudent) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(newStudent.age < 17) {
                reject("Student not Add")
            } else {
                students.push(newStudent)
                    resolve("Student Add")
            }
        }, 5000)
    })
    return pr;
  };
  addStudent(newStudent)
  .then((result) => {
    console.log(result)
    console.log(students)
  })
  .catch((error) => {
    console.log(error)
  });
  