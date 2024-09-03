
//simple function , common method
function sum(a,b){
     console.log(a+b); 
}
sum(1,2)//3

//function constructor
let x = new Function("a", "b","return a + b")
console.log(x(3,3));

//self invoking functions, IIFE
(()=>console.log(`Hey Isabella`))()

//arrow functions/fat arrow
let myFunc =(a)=> a*a;
console.log(myFunc(10));//100

//function as expressions/variables
function myName(name){return name}
let fullName = myName("Dennis Murithi")
console.log(fullName);

// generator function

function* generatorFun(){
    yield 1;
    yield 2;
    return 3
}
let generator = generatorFun()
let one = generator.next()
let two = generator.next()
let three = generator.next()
console.log(JSON.stringify(one))
console.log(JSON.stringify(two))
console.log(JSON.stringify(three))

//predefned functions
//eval function
let c= 3;
let d = 4;
console.log(eval("c + d"))

//parseInt, parseFloat, escape and unescape >> learn more about them..




