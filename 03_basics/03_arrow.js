//THIS - this keyword is used to refer context
const user = {
    username:"Ujjwal",
    website:"youtube",
    details: function(){
        return `${this.username} , hello welcome to the website`
    }
}

console.log(user.details());
user.username = "Kartik"
console.log(user.details());

//this keyword gives empty object{} 
//but if we use this keyword in browser it will give window as context

function useN() {
    let username="ujjwal"
    console.log(this.username);//gives UNDEFINED as this doesnot know the context
}
useN()

const userN =function(){
    let username="ujjwal"
    console.log(this.username);//gives UNDEFINED as this doesnot know the context
}
userN()

const chai = ()=>{
    let username="ujjwal"
    console.log(this.username);//gives UNDEFINED as this doesnot know the context
}
chai()

//ARROW FUNCTION
//have to use return keyword if using {}
const addtwo = (num)=>{
    return num + 2
}
console.log(addtwo(4));

//IMPLICIT RETURN 
//paranthesis works same as return keyword in implicit arraw function

//if you are creating a block scope that u have to use return keyword otherwise not 
const addone = (num)=> (num + 1)
console.log(addone(4));

const object1=()=> ({name:"ujjwal"})
console.log(object1());

