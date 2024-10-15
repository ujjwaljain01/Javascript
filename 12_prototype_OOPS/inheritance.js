//Inheritance - when a class inherits the properties of another class is called inheritance 
//by uding extends we can inherit another class into a class
//we can access their data members and methods by using super keyword
class User{
    constructor(username){
        this.username = username
    }
    
    logme(){
        console.log(`${this.username}`);
    }
}

class teacher extends User{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher('hello','hello@example.com','hello@1234')
chai.logme()
chai.addcourse()

const tea = new User('tea')
tea.logme()

console.log(chai instanceof User);