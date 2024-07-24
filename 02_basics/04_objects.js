//singleton
const instauser= {}
instauser.id="001"
instauser.name="Ujjwal"
instauser.isloggedin=false

const user={
    email:"999@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ujjwal",
            lastname:"jain"
        }
    }
}

console.log(instauser);
//user . operator to access the inner variables of an object
console.log(user.fullname.userfullname.fullname);

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

//same array mistake while concatinating
//METHOD 1 : NOT RECOMMENDED
let obj3={obj1,obj2} //do not create objects {obj1:{1:A},obj2:{2:B}}
console.log(obj3);
//METHOD 2:
obj3=Object.assign({},obj1,obj2)
console.log(obj3);
//METHOD 3
obj3 ={...obj1,...obj2}
console.log(obj3);

//for many user
const users=[
    {
        id:1,
        email:"email@gmail.com"
    },
    {
        id:1,
        email:"email@gmail.com"
    },
    {
        id:1,
        email:"email@gmail.com"
    },
    {
        id:1,
        email:"email@gmail.com"
    }
    
]
//access from many objects
console.log(users[1].email);

console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser))
console.log(instauser.hasOwnProperty('isloggedin'));

//objects de-structure
const course={
    coursename:"JS in hindi",
    price:999,
    Student:"Ujjwal"
}
const {Student:stu} = course
console.log(stu);

//API sends data in Objects and JSON files are nothing but objects