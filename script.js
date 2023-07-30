function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
let rNumber = (getRandomInt(3))
//console.log (rNumber)

function getComputerChoice(rNumber){
    if (rNumber === 0 ) { 
        return "rock" 
    }
    else if (rNumber === 1 ) {
        return "paper"
    }
    else { return "scissors"
    }
}


//console.log(getComputerChoice(rNumber))


 
let playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice(rNumber)

console.log(playerSelection)
console.log(computerSelection)

function playRound (playerSelection, computerSelection){
    if (playerSelection === "rock") { 
        if (computerSelection === "rock") {
            return "Draw!"
        }
        else if (computerSelection === "paper" ) {
            return "You lose!"
        }
        else { return "You win!"}
    }
    else if (playerSelection === "paper") { 
        if (computerSelection === "rock") {
            return "You win!"
        }
        else if (computerSelection === "paper" ) {
            return "Draw!"
        }
        else { return "You lose!"}
    }
    else {
        if (computerSelection === "rock") {
            return "You lose!"
        }
        else if (computerSelection === "paper" ) {
            return "You win!"
        }
        else { return "Draw!"}
    }
}

console.log(playRound(playerSelection, computerSelection))