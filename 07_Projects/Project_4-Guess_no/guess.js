//Selecting whole a lot of elements from the document/webpage/HTML file
const userInputField = document.querySelector('.guessField')
const submitButton = document.querySelector('.guessSubmit')
const lastGuess = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

//Creating an apragraph element for displaying result
const message = document.createElement('p')
//Storing previous result as array
const previousGuesses = []
//creating a random no that is to be guessed
const matchnumber = Math.floor((Math.random())* 100 + 1)
//storing remaining tries 
let remain = 10
//just for testing purposes
console.log(matchnumber);

//Attaching an event listener to the button
submitButton.addEventListener('click',function (e) {
    //prevents normal behaviour of form
    e.preventDefault()
    
    //checking if gusses are remaining
    if(remain === 0){
        message.innerHTML = "GAME OVER! You've used all your guesses.";
        document.querySelector('#wrapper').appendChild(message);
        submitButton.disabled = true;
    }

    //coveting userInput to a number NOTE: It has to be in the event listener to take values every time user enters new 
    const userInput = parseInt(userInputField.value)
    //erasing input field
    userInputField.value = null
    //moving curser to the input field
    userInputField.focus()
    //checking if userInput macthes with random number
    if(userInput >= 1 && userInput <= 100 && !isNaN(userInput)){
        //pushong userInput no to the array
        previousGuesses.push(userInput)
        if(userInput === matchnumber){
            //removing cursor from the input field
            userInputField.blur()
            //displaying message
            message.innerHTML = "YOU GUESSED IT CORRECT!!!"
            document.querySelector('#wrapper').appendChild(message)
            //disabling the button
            submitButton.disabled = true;
        }

        else{
            //decrementing remaining tries
            remain--
            //displaying remaining tries & previous guesses
            remainingGuess.innerHTML = remain
            lastGuess.innerHTML = previousGuesses
            //displaying message
            message.innerHTML = "TRY AGAIN"
            document.querySelector('#wrapper').appendChild(message)
            //displaying if userInput is high or low to matchnumber
            if(userInput > matchnumber){
                lowOrHigh.innerHTML = 'LOW'
            }
            else{
                lowOrHigh.innerHTML = 'HIGH'
            }

        }    
    
    }
    //dealing with edge cases
    else{
        //displaying message
        message.innerHTML = "INVALID INPUT"
        document.querySelector('#wrapper').appendChild(message)
    }
    
})