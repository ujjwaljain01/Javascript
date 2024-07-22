//objects declaration

//singleton
//Object.create()

//objects Literals
let mysym=Symbol("key")
let user={
    name:"Ujjwal",
    "full name":"Ujjwal jain",
    //using above created symbol
    [mysym]:"key1",
    age:18,
    email:"jain@gmail.com",
    location:"Delhi",
    lastloggeddays:["wednesday","thursday"]
}

//accessing objects value
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mysym]);

user.age=20
//freezing the object no change of info
//Object.freeze(user)
user.age=55
console.log(user);

//adding function to objects
user.greeting=function(){
    console.log(`Hello user, ${this.name}`);
}
user.greeting()