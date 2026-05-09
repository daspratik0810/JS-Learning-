let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainingAttempts = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const para = document.createElement("p")

let prevGuess = []
let numberOfGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        
        validateGuess(guess)
    })
}

function validateGuess(guess){  //value between 1 to 100 and NaN
    if(isNaN(guess)){
        alert("Please enter a valid number")
        console.log();
        
    }else if(guess > "100" ){
        alert("Please enter a lower number")
    }else if(guess < "0" ){
        alert("Please enter a higher number")
    }else {
        prevGuess.push(`${","+guess}`)
        if(numberOfGuesses === 11){
         displayGuess(guess)
         displayMessage( `Game Over !! <br> Random number was ${randomNumber}` )
         endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }       
    }
}

function checkGuess(guess){ //if userinput = random number  or not
   
    if(guess === randomNumber){
        displayMessage("You guessed it right")
        endGame()
    }else if (guess < randomNumber){
        displayMessage("Number is too low")
    }else if (guess > randomNumber){
        displayMessage("Number is too high")
    }
}








