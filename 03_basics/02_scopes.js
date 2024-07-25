//scopes are to which variables are accessable 1) BLOCK SCOPE 2) GLOBAL SCOPE
//{}

//var - has global scope to indifferent where it is declared
//var c = 30 OR c = 30 are same

let a = 100
let b = 200

if(true){
    let a = 10
    const b = 20
    var c =30
}

console.log(a);
console.log(b);
console.log(c);

//INNER function (two) can access variables of OUTER variable (one) but not vice versa
function one() {
    const username = "ujjwal"

    function two() {
        const webiste = "youtube"
        console.log(username);
    }
    //console.log(webiste); UNDEFINED bcz website variable has scope of two() only

    two()
}
// console.log(username); UNDEFINED bcz variable has scope to ONE function only
one()

/*HOISTING- it is a memory preparation phase in which let & const is uninitiziled var is undefined 
and functions call gets refernced to function defination*/

//works fine bcz it is a normal function
addone(5)
function addone(num) {
    return num + 1
}

// addtwo() gives error because cant access variables(let/const) before declaration
const addtwo = function (){
    return num + 2
}
