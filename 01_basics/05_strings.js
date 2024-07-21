let name= "ujjwal"
let age=18

console.log("My name is " + name + "and my age is" + age)
//This is an obselete method of writing Not used at production level

console.log(`my name is ${name} and my age is ${age}`);
//Instead use above

let New_string = new String("ujjwal")
/* second method to create string but 
first simple one also invoke the second method in backend*/

console.log(New_string.toUpperCase());
console.log(New_string.charAt(3));
console.log(New_string.indexOf("j"));

console.log(New_string.substring(4,3));
// do not take neg no's

console.log(New_string.slice(-6,-1));
// can take neg no's

let fullname= "           ujjwal        "
console.log(New_string.trim(fullname));
// remove spaces but not from between the characters

let siteurl = "Docs/django/dynamicurls"
console.log(siteurl.replace("%20","_"));

console.log(siteurl.includes("django"));

console.log(siteurl.split("/"));
