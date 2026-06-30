let employee = {
    name: 'Ram',
    age: 23,
    salary: 8000,
    "mobileno": 57848473,
    "First address": "Amrala",
}

console.log(employee.name)
console.log(employee['name']);
console.log(employee.mobileno);
console.log(employee['mobileno']);
console.log(employee['First address']);
console.log(Object.keys(employee));

// making object using class
class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        console.log(this.name + " " + this.age)
    }
    
}
s1 = new Student("Gourav",23)
console.log(typeof(s1))
console.log(s1.getName())
console.log("The End")