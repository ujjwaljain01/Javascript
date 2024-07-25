//Immediately Invoked Function Expression (IIFE)

//MUST USE SEMICOLON AFTER CALLING bcz IIFE doesnot know where to stop the scope
//otherwise it will give error for another IIFE function
(function DB(){
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`CONNECTION STABLISHED`);
})();

((name) =>{
    console.log(`${name} , Hello travellor`);
})("Ujjwal");
