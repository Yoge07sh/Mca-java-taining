let students = [
    {
        name: 'Ganesh',
        age: 23,
        course: 'MCA',
        marks: '90%'
    },
    {
        name: 'Mohit',
        age: 24,
        course: 'MCA',
        marks: '80%'
    },
    {
        name: 'Rohan',
        age: 25,
        course: 'B.Tech',
        marks: '75%'
    },
    {
        name: 'Sohan',
        age: 23,
        course: 'B.Tech',
        marks: '78%'
    },
    {
        name: 'Amit',
        age: 21,
        course: 'B.Tech',
        marks: '88%'
    }
]
let filteredStudent = []
students.forEach((student) => {
    if(student.course == 'B.Tech') {
        filteredStudent.push(student)
    }
})
console.log(filteredStudent)