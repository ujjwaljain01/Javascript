//selecting button and body for colour changing
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

//Applying forEach function as NodeList can be traverse through this
buttons.forEach(function (button){
    //Attaching an event listener to the button for changing color
    button.addEventListener('click',function(e) {
        body.style.backgroundColor = e.target.id
    })

})
