//Selecting clock element from the document/webpage
const clock = document.getElementById("clock")

//Using setInterval because it runs the code after every set time which in this case is 1 sec
setInterval(function (){
    //creating new Date object
    let date = new Date()
    //Displying it to the Document
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)