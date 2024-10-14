class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encrypt(){
        return `${this.password}abc`
    }

    changeUsername(){
        return this.username.toUpperCase()
    }
}

const myuser = new User('hello','hello@example.com','hello@1234')
console.log(myuser.encrypt());
console.log(myuser.changeUsername());

//behind the scene

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encrypt = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return this.username.toUpperCase()   
}

const tea = new User("good",'good@example.com','good@1234')
console.log(tea.encrypt());
console.log(tea.changeUsername());