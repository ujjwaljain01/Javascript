//call
//call is used to execute function explicitly.
//This allows borrowing methods from other objects, executing them within a different context, overriding the default value, and passing arguments. 
function setUsername(username){
    //DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    //we can pass current context using call and passing this in parameter
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

this.username = 'hello'
const user = new createUser('ujjwal','@gmail.com','123')
console.log(user);