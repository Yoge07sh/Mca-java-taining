// first we will make the program without using filter.
// I want new array having students whose marks is greater than 50.
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
let filteredStudents = []
students.forEach((student) => {
    if(student.marks > 50) {
        filteredStudents.push(student);
    }
})
console.log(filteredStudents)
// now we will use filter
let newStudents = students.filter((student) =>  student.marks > 50)
console.log(newStudents)