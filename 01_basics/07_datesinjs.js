//convert date to string for better readability
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

//create your own date formats
let date=new Date(2024,6,21,3,6)
let date01=new Date("2024-06-21")
let date02=new Date("06-21-2024")
console.log(date.toLocaleString());
console.log(date01.toLocaleString());
console.log(date02.toLocaleString());

//gives timestamp
console.log(Date.now());
console.log(date.getTime());
console.log(Math.floor(Date.now()/1000));

//get months and day
let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

//customize date format
newDate.toLocaleString('default',{
    weekday:"long"
})

