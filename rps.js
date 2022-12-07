
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
        startGame();
    });
    
    paper.addEventListener('click', () =>{
        playerSelection = "paper";
        startGame();
    });
    
    scissors.addEventListener('click', () =>{
        playerSelection = "scissors";
        startGame();
    });

    

    const playerScr = document.querySelector("#playerScore");
    const computerScr = document.querySelector("#computerScore");
    
    computerChoosing = document.querySelector("#computerChoosing");
    const results = document.querySelector("#results");
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'paper'){
            computerChoosing.textContent = `Computer picks ${computerSelection}`;
            results.textContent = "You lose! Paper beats rock! Computer wins!";
            ++computerScore;
            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;
    
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerChoosing.textContent = `Computer picks ${computerSelection}`;
            results.textContent =  "You lose! rock beats scissors! Computer wins!";
            ++computerScore;
            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;
    
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerChoosing.textContent = `Computer picks ${computerSelection}`;
            results.textContent =  "You lose! scissors beats paper! Computer wins!";
            ++computerScore;
            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;
       
        } else if (playerSelection == computerSelection){
            computerChoosing.textContent = `Computer picks ${computerSelection}`;
            results.textContent =  "A tie! Try again! No scores allocated";
    
        } else{
            results.textContent =  "You win! great choice!";
            computerChoosing.textContent = `Computer picks ${computerSelection}`;
            ++playerScore;
            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;   
         }
    
    };
    
    let audio = new Audio("One-Bard-Band.mp3");

   

    let i = 0;
    let mySound
    function startGame() {
        if(i !== 5) {
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            audio.play();       
     };
         if (playerScore == 5 || computerScore == 5){
            finalResults = document.querySelector("#finalResults");
            finalResults.textContent = `Game Over! Player scores ${playerScore}! Computer scores ${computerScore}!`;
            rock.setAttribute("disabled", 1);
            paper.setAttribute("disabled", 1);
            scissors.setAttribute("disabled", 1);
            playAgain.style.display="block";  
            audio.pause();  
            }
        };
 
        function endGame() {
            playerScore = 0;
            computerScore = 0;

            finalResults.textContent = " ";
            results.textContent = " ";

            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;   

            rock.removeAttribute("disabled");
            paper.removeAttribute("disabled");
            scissors.removeAttribute("disabled");
            playAgain.style.display="none";    
        };
        const playAgain = document.querySelector("#playAgain");
        playAgain.style.display="none";    
        playAgain.setClickable="false";
        const para = document.querySelector("#para");
        playAgain.addEventListener('click', () =>{
            endGame();
        });

