//flow controls

//if
// <, >, <=, >=, ==, !=, ===, !==
const temperature = 36
if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log(`More than 50`);
}

const score = 200
if(score>100){
    const power = "fly"
    console.log(power);
}
// console.log(power);

const balance = 1000

//IMPLICIT 
//do NOT create maultple lines of implicit code IT MAKES CODE UNREADABLE 
if (balance > 500) console.log(`balanc: ${balance}`),console.log("hello");

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("more than 900");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
