let Name= "Ujjwal"
let age = 18
let state = undefined
// By default it is undefined if we dont assign the value but we can also assign undefined to a variable
let temperature = null
/*
Use Case of NULL
when we have to pass not a value we can use null because if we pass 0 then it would also be an temperature
*/

// All types of datatypes
/*  Primitive
   
    number 
    bigint
    string
    boolean
    null =>object
    undefined
    symbol => use in components for identifying uniqueness
*/

/*  Reference(Non primitive) typeof of non-primitive is object

    Array
    Object
    Function
*/
let No= [1,2,3,4]
console.log(No);

Myobject={
    Name: "Ujjwal",
    Age:12,
    Gender: "male",
}// NOTE: To assign value to a variable we have to ":" not "=" All things in curly braces are object data members

// variable wwala function
const Myfunc=function(){
    console.log("hello");
}
Myfunc()// calls the function

console.log(typeof null);// object
console.log(typeof undefined); // undefined