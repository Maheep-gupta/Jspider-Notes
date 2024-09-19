// let emp = {
//     id: 101,
//     name: "midoriya",
//     phone: 4567890,
//     marks:[567,6879]
// }
// console.log(emp);

// //get
// console.log(emp.name);
// console.log(emp.id);
// console.log(emp.marks);


// // create
// emp.course = "WEB tech"
// emp.toDelete="w"
// console.log(emp);

// // update

// emp.name="Midoriya Deku"
// console.log(emp);

// // Delete

// delete emp.toDelete;

// console.log(emp);





// Object creation using constructor Function
function Student(id,name,subject,marks) {
    this.id = id;
    this.name = name;
    this.subject=subject
    this.marks=marks
}

let s1 = new Student(101,"Midoriya",['sql','java'],[100,100])
console.log(s1);

// Object creation using Class

class Bike {
    constructor(id,price,color,brand) {
        this.id = id;
        this.price = price;
        this.color = color;
        this.brand = brand;
        
    }
}

let b1=new Bike(999,89999,"Black","KTM")
console.log(b1a);





