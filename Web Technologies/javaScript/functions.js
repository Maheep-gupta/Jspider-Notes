// This is known as Anonymous function

// function (a,b) {
//     console.log("Print Anonymous function");
//     console.log(a+b);
    
// }



// Known as Immediate Invoked Function Expression (IIFE)
(
    function (a,b) {
        console.log("Print Anonymous function");
        console.log(a+b);
        
    }
)("a", "b")





// Known as function expression
let student=function (firstName,lastName) {
    console.log(firstName+" "+lastName);
}

console.log("Printing student data");
student("Midoriya","Deku")
