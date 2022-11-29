
function getComputerChoice() {
let choice = ['rock', 'paper', 'scissors'];
return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection = prompt('make your choice?');
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose! paper beats rock!' + ' Computer scores ' + ++computerScore + '!' + ' Your score in this round is ' + playerScore
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! rock beats scissors!' + ' Computer scores ' + ++computerScore  + '!' + ' Your score in this round is ' + playerScore
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       return 'You lose! scissors beats paper!' + ' Computer scores ' + ++computerScore + '!' + ' Your score in this round is ' + playerScore
    } else if (playerSelection == computerSelection){
        return 'A tie! Try again! No scores allocated'
    } else{
        return 'You win! great choice! Your Score in this round is ' + ++playerScore
    }
}

function game(playerScore, computerScore) {
    for(let i=0; i<5; i++) {
        playerSelection = prompt('make your choice?');
        let gameRound = playRound(playerSelection, computerSelection);
        return gameRound
       
        if (playerScore = 5) {
            return 'You win! Game over!'
        } if (computerScore = 5) {
            return 'Computer win! Game over!'
        }
    }
}

        
       