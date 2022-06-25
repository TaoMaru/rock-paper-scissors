function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice === 1) {
        return "Rock";
    }
    else if(randomChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const ROCKWIN = "Rock beats scissors!";
const PAPERWIN = "Paper beats rock!";
const SCISSORSWIN = "Scissors beats paper!";

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(playerChoice == "rock") {
        if(computerChoice == "paper") {
            return `You Lose! ${PAPERWIN}`;
        }
        else if(computerChoice == "scissors") {
            return `You Win! ${ROCKWIN}`;
        }
        else {
            return `It's a Draw! You both chose Rock!`;
        }
    }
    else if(playerChoice == "paper") {
        if(computerChoice == "scissors") {
            return `You Lose! ${SCISSORSWIN}`;
        }
        else if(computerChoice == "rock") {
            return `You Win! ${PAPERWIN}`;
        }
        else {
            return `It's a Draw! You both chose Paper!`;
        }
    }
    else if(playerChoice == "scissors") {
        if(computerChoice == "rock") {
            return `You Lose! ${ROCKWIN}`;
        }
        else if(computerChoice == "paper") {
            return `You Win! ${SCISSORSWIN}`;
        }
        else {
            return `It's a Draw! You both chose Scissors!`;
        }
    }
    else {
        return "Oops! Try again! Will it be Rock, Paper, or Scissors?";
    }
}

function getNumRounds() {
    return parseInt(window.prompt("How many rounds would you like to play? "));
}

function getPlayerChoice() {
    return window.prompt("Please enter 'Rock', 'Paper', or 'Scissors': ")
}



function game(numRounds) {
    let playerMove;
    for(let currentRound = 0; currentRound < numRounds; currentRound++) {
        playerMove = getPlayerChoice();
        console.log(playRound(playerMove, computerPlay()));
    }
}

game(getNumRounds());