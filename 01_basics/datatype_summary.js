/********************************variable storage******************************/
// stack (primitive) Heap(Non-primitive)
let email = "Abc@gmail.com"
let email2 = email
email2 = "Ujjwal@gmail.com"
console.log(email);
console.log(email2); // koi chnage nahi aya first email m kyoki copy bna ke email2 m assign hui

let user_one={
    email: "Abc@gmail.com",
}
let user_two= user_one
user_two.email="Ujjwal@gmail.com"
console.log(user_one);
console.log(user_two);