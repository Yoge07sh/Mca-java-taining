let students = [
    {
        name: 'Ram',
        age: 22,
        marks: 56
    },
    {
        name: 'Shyam',
        age: 23,
        marks: 66
    },
    {
        name: 'Raju',
        age: 26,
        marks: 48
    },
    {
        name: 'Rahul',
        age: 20,
        marks: 46
    },
    {
        name: 'Rajat',
        age: 28,
        marks: 50
    }
]
let newStudent = {
    name: 'Rajan',
    age: 23,
    marks: 47
}
function addStudent(newStudent) {
    // console.log("We are going to add a new Student");
    // students.push(newStudent)
    // console.log("Students has been added successfully...");
    setTimeout(() => {
        console.log("Adding student");
        students.push(newStudent);
        console.log("Student Added...");
    },3000);
}
    
function displayStudent() {
    students.forEach((student) =>{
        console.log(student);
    })
}
addStudent(newStudent)
displayStudent()
