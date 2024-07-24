//function declaration 
function addTwoNum(num1,num2) {
    console.log(num1+num2);
}
addTwoNum(4,3)

//return and console.log values are different 
//if there is not a return then the fn will return undefined

function addTwoNum(num1,num2) {
    // const result=num1+num2
    // return result 
    return num1+num2   
}
const result=addTwoNum(4,5)
console.log(result);

function loggenin(username="NOT") {
    if(!username){
        return `plz enter username`
    }
    return `${username},you have succesfully logged in`
}
// loggenin("ujjwal")
console.log(loggenin("ujjwal"));

//if we dont pass any value in argument then the values passed is undefined 
console.log(loggenin());

function calculatecartprice(...num1) {
    return num1
}
console.log(calculatecartprice(200,300,400));

//using objects in functions
const user={
    username:"ujjwal",
    price:100
}
function handleobject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleobject(user)
handleobject({
    username:"yash",
    price:899
})

//using array in functions
const arr=[0,1,2,3]
function secondElement(array) {
    return array[1]
}
console.log(secondElement(arr));
console.log(secondElement([100,200,300]))
