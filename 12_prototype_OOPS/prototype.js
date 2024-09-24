const heros =['thor','spiderman']

const herosPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getspiderpower: function(){
        console.log(`The power is ${this.spiderman}`);
    }
}

Object.prototype.ujjwal = function(){
    console.log(`objects have all super powers`);
}

heros.ujjwal()

herosPower.ujjwal()

Array.prototype.hello = function(){
    console.log(`Hello`);
}

heros.hello()


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //giving TA support when we have teacher support
    __proto__:TeachingSupport,
}

//giving teaccher all properties of user as a teacher is also a user
Teacher.__proto__ = User

let username = 'ujjwal    '
//creating a prototype method for string datatype
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

//using the method created above 
username.trueLength()
"hello".trueLength()
'World   '.trueLength()