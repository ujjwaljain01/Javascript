const userInputField = document.querySelector('.guessField')
const submitButton = document.querySelector('.guessSubmit')
const previousGuess = document.querySelector('.guesses')
const remainingChances = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const p = document.createElement('p')
const startOver = document.querySelector('.resultParas')

let prevGuess = []
let remain = 10
let playGame = true
let randomNumber = Math.floor((Math.random() *100 + 1 ))

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInputField.value)
        
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Give a valid number')
    }
    else if(guess < 1){
        alert('number is less than 1')
    }
    else if(guess > 100){
        alert('number is more than 100')
    }
    else{
        if(remain < 2){
            displayMessage(`Game Over!! the number was ${randomNumber}`)
            endGame()
        }
        else{
            remain --
            prevGuess.push(guess)
            checkguess(guess)
            displayGuess(guess)
        }
    }
}

function checkguess(guess) {
    if(guess === randomNumber){
        displayMessage(`YOU GUESSED IT CORRECT!!! ${randomNumber} is the number`)
    }
    else if(guess > randomNumber){
        displayMessage(`The guess is too high`)
    }
    else{
        displayMessage(`The guess is too low`)
    }
    
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
    
}

function displayGuess(guess) {
    userInputField.value = ""
    userInputField.focus()
    previousGuess.innerHTML = prevGuess
    remainingChances.innerHTML = remain
}

function endGame(params) {
    playGame = false
    userInputField.blur()
    submitButton.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        playGame = true
        prevGuess = []
        remain = 10
        previousGuess.innerHTML = ''
        remainingChances.innerHTML = '10'
        lowOrHigh.innerHTML = ""
        userInputField.value = ""
        submitButton.removeAttribute('disabled');
        startOver.removeChild(p);
    })
}