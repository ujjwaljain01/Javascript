//creating number datatype with two different types
let score = 400
console.log(score);
let balance = new Number(200)
console.log(balance);

//convert it to string and performing methods 
let balstring= balance.toString()
let balstringlen= balance.toString().length

//To get precision value up to num that is entered
console.log(balance.toFixed(2)); //200.00

//To get value that is precized upto that value
let pointer=23.678988
console.log(pointer.toPrecision(2)); //24

//gives value acc to number system
const hundred=100000
console.log(hundred.toLocaleString('en-IN'));

//++++++++++++++++ MATHS ++++++++++++++++
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log(Math.min(1,18,3));
console.log(Math.max(1,18,3));

console.log(Math.random());//0 to 1
console.log((Math.random()*10+1));//gives valuesbw 1 to 11 to avoid 0 we add 1 to it
console.log(Math.floor((Math.random()*10)+1));//round off it to single digit

let min =10
let max=20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));//gives value bw 10 to 21