let visitors = [
    {
        visitorsName: 'Gourav Kumar',
        eventName: 'BirthDay',
        eventPlace: 'ABS Garden',
        gender: 'Male'
    },
    {
        visitorsName: 'Ganesh',
        eventName: 'BirthDay',
        eventPlace: 'Rajat Garden',
        gender: 'Male'
    },
    {
        visitorsName: 'Riya',
        eventName: 'Ring Ceremony',
        eventPlace: 'Shine Garden',
        gender: 'Female'
    },
    {
        visitorsName: 'Nisha',
        eventName: 'Weeding',
        eventPlace: 'B.R> Garden',
        gender: 'Female'
    },
    {
        visitorsName: 'Mohit Kumar',
        eventName: 'Anniversary',
        eventPlace: 'Dilshad Garden',
        gender: 'Male'
    }
]
let data = visitors.map((visitor) => {
    if(visitor.gender == 'Male') {
        return 'Mr.' + visitor.visitorsName
    }
    else {
        return 'Mrs.' + visitor.visitorsName
    }
})
console.log(data)