let score = "33abc"
let Numbervalue= Number(score)
console.log(typeof Numbervalue);
console.log(Numbervalue);   
// 33abc => NaN
// null  => 0
// undefined => NaN

let isloggedin = "23"
let booleanloogedin = Boolean(isloggedin)
console.log(booleanloogedin);
// 1=> True , 0=> False
// "ujjwal" => True , "" => false


let name = true
let stringname= String(name)
console.log(stringname); 
// converts every another data type data into strings 

// ************************operations**********************//


let value = 3
let negvalue = -value
console.log(negvalue);

console.log("1"+1);
console.log(1+"1");
console.log("1"+"1");
// all gives same ouput 

console.log("1"+1+1); // JS converts no's into string and concatinate them
console.log(1+"1"+1); // gives same output as above "111"
console.log(1+1+"1"); // but in this it adds the no's then concatinate them with the string "21"

