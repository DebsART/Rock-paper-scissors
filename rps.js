
function getComputerChoice() {
let choice = ['rock', 'paper', 'scissors'];
return choice[Math.floor(Math.random() * choice.length)];
}

let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");


rock.addEventListener('click', () =>{
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () =>{
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () =>{
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});

const playerScr = document.querySelector("#playerScore");
const computerScr = document.querySelector("#computerScore");


const results = document.querySelector("#results");
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        results.textContent = "You lose! Paper beats rock! Computer wins!";
        ++computerScore;
        computerScr.textContent = `Computer score : ${computerScore}`;
        playerScr.textContent = `Player score : ${playerScore}`;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        results.textContent =  "You lose! rock beats paper! Computer wins!";
        ++computerScore;
        computerScr.textContent = `Computer score : ${computerScore}`;
        playerScr.textContent = `Player score : ${playerScore}`;

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        results.textContent =  "You lose! scissors beats paper! Computer wins!";
        ++computerScore;
        computerScr.textContent = `Computer score : ${computerScore}`;
        playerScr.textContent = `Player score : ${playerScore}`;
   
    } else if (playerSelection == computerSelection){
        results.textContent =  "A tie! Try again! No scores allocated";

    } else{
        results.textContent =  "You win! great choice!";
        ++playerScore;
        computerScr.textContent = `Computer score : ${computerScore}`;
        playerScr.textContent = `Player score : ${playerScore}`;   
     }

};


function startGame() {
    for(let i=0; i<5; i++) {
        playRound(playerSelection, computerSelection);
        
        const finalResults = document.querySelector("finalResults");

        if (playerScore = 5) {
            finalResults.textContent = 'You win! Game over!'
        } if (computerScore = 5) {
            finalResults.textContent = 'Computer win! Game over!'
        }
    }
}

      