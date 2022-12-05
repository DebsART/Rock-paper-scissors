
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
    
    let i =  0;
    function startGame() {
        if(i !== 5) {
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        };
         if (playerScore == 5 || computerScore == 5){
            finalResults = document.querySelector("#finalResults");
            finalResults.textContent = `Game Over! Player scores ${playerScore}! Computer scores ${computerScore}!`;
            rock.setAttribute("disabled", 1);
            paper.setAttribute("disabled", 1);
            scissors.setAttribute("disabled", 1);
            }
        };

        function endGame() {
            playerScore = 0;
            computerScore = 0;

            computerScr.textContent = `Computer score : ${computerScore}`;
            playerScr.textContent = `Player score : ${playerScore}`;   

            rock.removeAttribute("disabled", 1);
            paper.setAttribute("disabled", 1);
            scissors.setAttribute("disabled", 1);

        }
        