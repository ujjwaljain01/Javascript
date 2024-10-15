//STATIC - stati keyword is used to make a method or viriable static which means 
//it cannot be accessed through obj instances rather by obj directly 
class User{
    constructor(username){
        this.username = username
    }
    
    logme(){
        console.log(`${this.username}`);
    }

    static creatId(){
        return `123`
    }
}

const chai = new User()
// console.log(chai.creatId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const tea = new Teacher('tea','tea@gmail.com')
// console.log(tea.creatId());

//calling of static method
console.log(Teacher.creatId());