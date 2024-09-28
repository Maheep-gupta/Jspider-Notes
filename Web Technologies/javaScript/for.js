console.log(a);
var a = 10;
console.log(a);

fname()
function fname() {
    console.log("kya bhai hoisting karta hai tu");
    
}


let arr = [1, 4, 5, 'looo', 'aaya mai', 'oh hoo', 'aap to so rhe']

let newarr = arr.map((x) => {
    return x
})
console.log(newarr);

let fornewArr = arr.forEach((x) => {
    return x
})
console.log(fornewArr);

let [a1, a2, a3, a4, a5] = arr;
console.log(a1);
console.log(a2);
console.log(a3);
let emp = {
    name: "JAATU",
    loc:"basuri nagar"
}
let { name, loc } = emp;

console.log(name);
console.log(loc);





