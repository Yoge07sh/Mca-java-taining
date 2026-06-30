//comparing objects
let obj1 = {
    "name": "yogesh",
    age: 21,
    class: 5,
}
let obj2 = {
    "name": "yogesh",
    age: 21,
    class: 5,
}
// shallow comparison
let check = (obj1, obj2) => {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(check(obj1, obj2));
//using json
let c = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(c);
// Deep copy 
let deepcopy = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (typeof obj1 != "object" || typeof obj2 != "object" || obj1 == null || obj2 == null) {
        return false;
    }
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);                               
    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (!key2.includes(key) || !deepcopy(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepcopy(obj1, obj2));