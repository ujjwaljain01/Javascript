//getter and setter can only be used together and is used to make properties abstract to others like password in this example

class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()}hello`
    }

    set password(value){
        this._password = value
    }
}

const user1 = new user("hello@ai","abc")
console.log(user1.password);