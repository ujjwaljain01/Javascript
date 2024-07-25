const userEmail = []

if(userEmail){
    console.log("Got user eamil");
}
else{
    console.log("dont user email");
}

//FALSY VALUE

/*  1)false
    2) 0 , -0, 0n
    3) ""
    4) null
    5) undefined
    6) NaN
*/

//TRUTHY VALUE

/*  1) "0"
    2) 'false'
    3) " "
    4) []
    5) {}
    6) function(){}
*/

if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined
//safety check is 'first value' ?? is null or undefined then ?? 'second value' will be assigned

let val
val = 5 ?? 10
console.log(val); // val = 5

val = null ?? 10
console.log(val); // val = 10

val = undefined ?? 15
console.log(val); // val = 15

val = null ?? 20 ?? 25
console.log(val);

//Terniary Operator 
// condition ? true : false

const teaPrice = 100
teaPrice < 80 ? console.log("Less than 80") : console.log("More than 80");
