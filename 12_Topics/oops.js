//javascript OOPS
/*javascript does have classes but JS is mainly a prototyple based language and its classes are syntactic sugar existing upon prototypal based mechanism. 
it is used to provide more familiar syntax for develops that come from JAVA, C++ but works differently under the hood.*/

//Object - collection of properties and methods

//Parts of OOPS
//object literal- literally an object
//constructor function
//prototype
//instances(new,this)

//four pillars
//1. abstraction
//2. encapsulation
//3. inheritance
//4. polymorphism

const user = {
    username: "ujjwal",
    logincount: 12,
    loggedIn: true,
    getUserDetails: function(){
        console.log(this.username); //this keyword provide the context of above username
    }
}

console.log(user.username);
console.log(user.getUserDetails());


function newUser(username,loginCount,isloggedIn){
    this.username = username //store the value of arg username to variable username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    this.greetings = function(){
        console.log(`Welcome, ${this.username}`);
    }

    return this
}

//new keyowrd creates a new instance (seperate memory location) for storing the values
const user1 = new newUser("Ujjwal",6,true)
const user2 = new newUser("GOAT",10,false)

console.log(user1);
console.log(user1.greetings());
console.log(user2);
console.log(user1.constructor);

//checks whether a object is an instance of a class
//left side- object right side- class
console.log(user1 instanceof newUser);
