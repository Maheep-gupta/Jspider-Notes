async function getInfo(url) {
    let info = await fetch(url)
    let data = await info.json();
    console.log(data);
    
}
// getInfo("https://jsonplaceholder.typicode.com/todos")

let a = 10;
let b = 5;
function parent() {
    let c = 10;
    console.log(a+b+c);
    function child() {
        let d = 23;
        console.log(a+b+c+d);
        
    }
    child()
}
parent();
 
let arr = [1, 2, 4, 56, 7, 1, 89, 9, 101]
// let newArr=arr.sort((a,b)=> a-b)
let newArr = arr.sort((a, b) => b - a)

console.log(newArr);
