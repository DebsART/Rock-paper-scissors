
function getComputerChoice() {
let choice = ['rock', 'paper', 'scissors'];
return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection = prompt('make your choice?');
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
function game1(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose! paper beats rock!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! rock beats scissors!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       return 'You lose! scissors beats paper!'
    } else if (playerSelection == computerSelection){
        return 'A tie! Try again!'
    } else{
        return 'You win! great choice!'
    }
    console.log(game1(playerSelection, computerSelection));
}