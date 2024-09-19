var a; // declarartion
a = 10 // Initalisation
a = "a0" // reInitalisation
var a="true" // re declare
console.log("Value of container: "+a)


let b;
b = 10;
b = "1";
// let b = "1"; // re declare not possile
console.log("Value of container: " + b)

// const c; // declaration and initalisation must be in a single line
const c = "1";
//c="ll" // typeError as can reassign a constant
// const c = true;// re declare not possible
console.log("Value of container: " + c)
b="10"
console.log(" == "+a==b);
console.log(" != "+a!=b);
console.log(" === "+a===b);
console.log(" !== "+a!==b);

