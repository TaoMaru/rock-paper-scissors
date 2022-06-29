function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice === 1) {
        return "rock";
    }
    else if(randomChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const ROCKWIN = "Rock beats scissors!";
const PAPERWIN = "Paper beats rock!";
const SCISSORSWIN = "Scissors beats paper!";

function playRound(playerSelection, computerSelection) {
    //let playerChoice = playerSelection.toLowerCase();
    //let computerChoice = computerSelection.toLowerCase();
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            return `You Lose! ${PAPERWIN}`;
        }
        else if(computerSelection == "scissors") {
            return `You Win! ${ROCKWIN}`;
        }
        else {
            return `It's a Draw! You both chose Rock!`;
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "scissors") {
            return `You Lose! ${SCISSORSWIN}`;
        }
        else if(computerSelection == "rock") {
            return `You Win! ${PAPERWIN}`;
        }
        else {
            return `It's a Draw! You both chose Paper!`;
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return `You Lose! ${ROCKWIN}`;
        }
        else if(computerSelection == "paper") {
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

function getPlayerChoice(e) {
    let playerChoice;
    playerChoice = e.target.className;
    e.target.classList.add("clicked");
    console.log(e);
   
    let roundResult = playRound(playerChoice, computerPlay());

    //let newScore = document.createElement("p");
    scoreList.textContent = roundResult;
    
};

function removeClickedStyle(e) {
    e.target.classList.remove("clicked");
};

function keepScore(numRounds, numPlayerWins) {
    if(numPlayerWins > Math.floor(numRounds/2)) {
        return "Congratulations! You Win!";
    }
    else if(numRounds % 2 == 0 && numPlayerWins == numRounds / 2) {
        return "It's a Draw!";
    }
    else {
        return "You Lose! Better luck next time!";
    }
}

function game(numRounds) {
    let playerWins = 0;
    let playerMove;
    let roundResult = "";
    for(let currentRound = 0; currentRound < numRounds; currentRound++) {
        playerMove = getPlayerChoice();
        roundResult = playRound(playerMove, computerPlay());
        console.log(roundResult);
        if(roundResult.includes("You Win")) {
            playerWins++;
        };
    }
    console.log(keepScore(numRounds, playerWins));
}

//game(getNumRounds());

const gameArea = document.querySelector('.gameBoard');
const scoreBoard = document.querySelector(".scoreBoard");
const scoreList = document.createElement("p");
scoreBoard.appendChild(scoreList);


const choiceButtons = document.querySelectorAll('.gameBoard button');
choiceButtons.forEach( (btn) => {
    btn.addEventListener('click', getPlayerChoice);
    btn.addEventListener('transitionend', removeClickedStyle);
});
