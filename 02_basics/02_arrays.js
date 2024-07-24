const marvel_heros=["Ironman","Thor","Spiderman"]
const dc_heros=["Flash","Batman","Superman"]

//push takes whole array and add it to original array 
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][0]);

//returns new array and add elements 
const all_Heros=marvel_heros.concat(dc_heros)
console.log(all_Heros);

//Spread(...) operator
const Heros=[...marvel_heros,...dc_heros]
console.log(Heros);

//flat method opening array in array
const array=[1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]
const arrayflat=array.flat(Infinity)
console.log(arrayflat);

//checks if array is or not
console.log(Array.isArray("ujjwal"));

//create array from argument
console.log(Array.from("Ujjwal"));
console.log(Array.from({"name":"Ujjwal"}));

//create array from variables
let num1=100
let num2=200
let num3=300
const arr=[num1,num2,num3]
console.log(arr);
console.log(Array.of(num1,num2,num3));

