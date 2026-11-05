//normal array
let arr=[1,2,3,4,5];
console.log(arr)


//array of strings
let fruits=["apple","orange","pinapple"];
console.log(fruits[1]);
for(let i=0;i<fruits.length;i++){
console.log(fruits[i]);
}

//array of object
let details=[{
    name:"dhanu",
    age:24,
    city:"chennai"
}];
details.forEach(function(detail){
    console.log(detail.age);
});

//multidimesional
let num=[[1,2,3],[4,5,6],[7,8,9]];
console.log(num[0][1]);

//mixed 
let detail=["dhanu",23,true,85.5,{name:"dhanu"}];
let re=detail.forEach(function(de){
    console.log(typeof(de));
})

//nested
let students=[
    ["dhanu"],["anu"]
];
console.log(students);
