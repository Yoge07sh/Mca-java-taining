// first way [function statement]
sum(10, 45)
// function sum(a, b) {
//     a = 20;
//     b = 56;
//     c = a + b;
//     console.log(c);
//     console.log(arguments)
// }
//sum(10, 45)
function sum(a, b) {
    return a + b;
}
let result1 = sum(12, 78);
console.log(result1 + "...result1")
// ----------------------------------------------


// third way [arrow function]
// let multiply = (a, b) => {
//     let c = a + b;
//     console.log(c);
//    // console.log(arguments)
// }
let multiply = (a, b) => a * b
let result = multiply(90, 3);
console.log(result + "....result")
//multiply(90, 3)

// --------------------------------------------


// second way [function expression]
let sum1 = 10;
let sum2 = function (a, b) {
    let c = a + b;
    console.log(c)
    console.log(arguments)
}
sum2(10, 78)
console.log(typeof(sum2))
