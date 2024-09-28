// Hoisting
// console.log(a);
// const a = 0;

// scope

// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }
// console.log(index);


// for (var index = 0; index < 10; index++) {
//     // console.log(index);

// }
// console.log(index);-


// let age = 10;
// if (age < 20) {
//     const y = 20;
// }
// console.log(y);

let arr = [13, 56, 4, 5, 9, 10, 20, 1];

// arr.pop();
// arr.shift()--> remove at start
// arr.push(6)
// arr.unshift(80)---> add at start
// arr.slice(start,count)
// arr.splice(start,count,...newElements)
// arr.includes(contains,startIndex)
// arr.indexOf(find,startindex);
// arr.concat(arr1,arr2)
// arr.join('maheep')
// arr.reverse()
// arr.toString()

// console.log(arr.toString())

// Main methods after es6

// Sort
// let newArr=arr.sort((a,b)=>{return a-b}) ---> ascending order
// let newArr=arr.sort((a,b)=>{return b-a}) --> descending order

// Filter
// let newArr=arr.filter((index,ele)=>ele%2==0)

// console.log(newArr);
console.log(arr.reduce((i,sum) => {
    return sum+i,0
}));


// Deafault parameters
// let a = (a=10,b=5) => {
//     console.log(a+b);

// }

// a()








// class emp {
//     constructor(name, id, sal) {
//         this.name,
//             this.id = id
//         this.sal = sal
//     }
// }
// let emp1 = new emp('ramesh', 11, 222)
// console.log(emp1);






// let e = {
//     name: "ramesh",
//     sal: 12000,
//     id:123
// }
// console.log(e);




// function emp(name, id, sal) {
//     this.name,
//         this.id = id
//     this.sal = sal
// }







// let h1 = document.createElement('h1')
// h1.innerText = 'hello';

// let body = document.getElementById('m1')

// body.appendChild(h1)


// let p = document.getElementsByClassName('text')
// console.log(p);
// p[0].innerText = "hello"
// p[1].innerText = "hi"


// document.querySelector --------- document.getElementById

// document.querySelectorAll ------- document.getElementByClassName





























// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {

//         response.json()
//             .then((data) => {
//                 console.log(data);

//             })
//             .catch((err) => {
//                 console.log(err);

//             })



//     })
//     .catch((err) => {
//         console.log(err);

//     })







let dob=[1988,2022,2000,2034]
function userAge(date) {
    return 2024-date
}
let brith = dob.map((ele)=>userAge(ele))
console.log(brith);

