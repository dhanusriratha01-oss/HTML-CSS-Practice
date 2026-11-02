// let fruit=["apple","orange","banana"];
// fruit.splice(1,0,"watermelo");
// console.log(fruit)

// let fruit=["apple","orange","banana"];
// fruit.forEach(fruits => {
//     console.log(fruits)
    
// });

// let numbers=[1,2,3,4];
// numbers.forEach(num => {
//     console.log(num+num)

// });

// let students={
//     name:"dhanu",
//     age:23,

// };
// students["city"]="chennai";

// for (let key in students);{
//     console.log(key);
// }
// delete students.age;

// console.log(students);

// let stud={
//     name:"dhanusree",
//     greet:function(){
//         console.log("hello");        
//     }
// }
// stud.greet();

// let students={
//     name:"dhanu",
//     age:23,

// };
// students["city"]="chennai";
// console.log(Object.values(students));
// let hi=Object.entries(students);
// console.log(hi);


// let student={
//     name:"dhanu",
//     age:23,

// };
// student["city"]="chennai";

// for (let values in student) {
//     console.log(values);
// }

// let veg=[1,2,3,4,5,6];
// if (veg.includes(2)){
//     console.log("welcome");
        
// } else {
//     console.log("not welcome")
    
// }

// let student={
//     name:"dhanusree",
//     age:24,
    
//     address:{
//         city:"chennai",
//         state:"tamil nadu"
//     }

// }
// console.log(student.name);
// console.log(student.address?.done);

// let student = {
//     name: "Dhanu",
//     age: 23
// };

// let newStudent = {};

// Object.assign(newStudent, student);

// console.log(newStudent);

let student={
    name:"dhanu",
    age:24,
};
let res=JSON.stringify(student);
let resu=JSON.parse(res);
console.log(resu);

let today=new Date(2026,10,1,10,45,30);
console.log(today);