// randomize computer's RPS selection, return
// string value:
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


// string win/loss vars for each round of gameplay:
const ROCKWIN = "Rock beats scissors!";
const PAPERWIN = "Paper beats rock!";
const SCISSORSWIN = "Scissors beats paper!";


// Play one round of RPS: playerSelection passed as arg
// from click event; computerSelection randomized and
// passed as arg.
function playRound(playerSelection, computerSelection) {
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
};


// Play full Bo5 game of RPS:
function playGame(e) {
    let playerChoice;
    playerChoice = e.target.className;
    e.target.classList.add("clicked");
    console.log(e);
   
    let roundResult = playRound(playerChoice, computerPlay());

    //let newScore = document.createElement("p");
    scoreList.textContent = roundResult;
    keepScore(roundResult);
    runningScore.textContent = "Score: Player: " + playerScore + 
        " | Computer: " + computerScore;
    if(playerScore === 5) {
        runningScore.textContent = CONGRATS;
    }
    else if(computerScore === 5) {
        runningScore.textContent = LOSS;
    }
};

// string win/loss vars:
const CONGRATS = "You Won!! Congratulations!";
const LOSS = "You Lost! Better luck next time!";

// remove the 'clicked' styling by removing the
// 'clicked' class from btn
function removeClickedStyle(e) {
    e.target.classList.remove("clicked");
};

// Increment player and computer scores based
// on result of each round played
function keepScore(resultOfRound) {
    if(resultOfRound.includes("You Win")) {
        playerScore++;
        return;
    }
    if(resultOfRound.includes("You Lose")) {
        computerScore++;
        return;
    }
    
};

//Event Listeners and DOM vars:

const gameArea = document.querySelector('.gameBoard');
const scoreBoard = document.querySelector(".scoreBoard");
const scoreList = document.createElement("p");
scoreBoard.appendChild(scoreList);
const runningScore = document.querySelector(".currentScore");
let playerScore = 0;
let computerScore = 0;


const choiceButtons = document.querySelectorAll('.gameBoard button');
choiceButtons.forEach( (btn) => {
    btn.addEventListener('click', playGame);
    btn.addEventListener('transitionend', removeClickedStyle);
});
