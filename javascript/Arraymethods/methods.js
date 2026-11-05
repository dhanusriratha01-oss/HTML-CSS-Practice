let fruits=["apple","orange","pinapple"];
console.log(fruits);
fruits.find("apple")
console.log(fruits);


find()
let num1=[1,2,3,4,5,6,7,8];
let res=num1.find(function(fruit){
    return fruit%2==0
})
console.log(res);


//filter()
let arr=[1,5,3,4,5,6,7,8];
let result=arr.filter(function(fruit){
    return fruit%2==0
})
console.log(result);

//findindex
let fruits1=["apple","orange","pinapple"];
let fin=fruits1.findIndex(function(fun){
    if(fun==="apple"){
        return true;
    }
})
console.log(fin);


//findlast(), findlastindex()
let arrs=[1,5,3,4,5,6,7,8];
let results=arrs.findLast(function(finl){
    if(finl>=5){
        return true;
    }
})
let resu=arrs.findLastIndex(function(fie){
    if(fie>=2){
        return true;
    }
})
console.log(results);
console.log(resu);

//indexof,lastindexof,include
let car=["BMW","thar","ferari","toyota"];
console.log(car.indexOf("ferari"));
console.log(car.lastIndexOf("thar"));
console.log(car.includes("thar"));


//foreach
car.forEach(function(fun){
    console.log(fun);
})

//map()
let c=[1,3,2,4,5];
let b=c.map(function(a){
    return a * 2;
})
console.log(b)

//filter
let d=c.filter(function(f){
    return f%2==0;

})
console.log(d);

//reduce
let r=c.reduce(function(total,num){
    return total + num;
},10)
console.log('==================================')
console.log(r);

//sort() asc
let ass=c.sort(function(a,b){
    return a-b
})
console.log(ass)

//sort des
let des=c.sort(function(a,b){
    return b-a
})
console.log(ass)

let word=["hi","hello","welcome","asia"];
let word1=["car","bike","cycle"];
console.log(word.sort());

console.log(word.reverse());

function check(f){
    if(f==="hi"){
        return "helloooo"
}

}
console.log(check("hi"));

//some
function check(mark){
    if (mark==="hi"){
        return true
    }
    
}
let ch=word.some(check);
console.log("dhanusree");


//slice,concat,join,
console.log(word.slice(1,2));
console.log(word.concat(word1));
console.log(word.join("//"));
console.log(word.join());

//flat()
let num=[1,2,3,[4,[5]],89];
console.log(num.flat(Infinity));

//flatmap()
let h=[2,3,4,5];
let re=h.flatMap(function(f){
    return [f*2];
})
console.log(re);

//tostring()
console.log(word.toString());

//tolocalstring , at()
let no=1000000;
console.log(no.toLocaleString("en-IN"));
console.log(word.at(0));
console.log(Array.isArray(word));

let age="23";
let ru = Array.from(age);
console.log(ru);
console.log(Array.of(10,20,30,40));
 async function hello(){
    let numb=[10,20,30,40];
    let result =await Array.fromAsync(numb);
    console.log(result);
 }
 hello();

//entries
let details={
    name:"dhanu",
    age:24,
    city:"chennai"
};
let all=Object.entries(details);
for(let i of all){
    console.log(i);

}
let key=Object.keys(details);
console.log(key);
let value=Object.values(details);
console.log(value);












