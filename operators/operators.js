//comparison 
let mark=89;
if(mark>90){
    console.log("first grade");
}else if(mark<35){
    console.log("fail");
}else if(mark>=95){
    console.log("rank holder");
}else if(mark <=65){
    console.log("third grade");

}else{
    console.log("pass")
}

let password="dhanu";
if(password=="dhanu"){
    console.log("login succesfully");
}else if(password==="dhanu"){
    console.log("login succesfully");

}else if(password != "dhanu"){
    console.log("invalid password");

}

//logical
//AND
let email="dhanu";
let pass=12345;
if(email==="dhanu" && pass===12345){
    console.log("login sucessfully");
}else{
    console.log("invalid password or username");

}

//OR
if(email==="dhanu" || pass===12345){
    console.log("invalid email or password");
}else{
    console.log("sucessfully login");
}

//NOT
let year=2002;
if (!(year%4==0)){
    console.log(" not leap year");
}else{
    console.log(" leap year");
}

//conditional

let age=18;
let result=age>=18? "vote": "not vote";
console.log(result);

//nullish
let name="dhanu";
let res= name ?? "guest";
console.log(res)
console.log(typeof(name));
console.log(name instanceof String);