let playerScore = 0;

// THIS FUNCTION is the computer playing.
function computerPlay() {
 let randomNumber = Math.floor(Math.random() * 3);  
 switch(randomNumber) {
     case 0:
     return 'rock';
     break;
     case 1:
     return 'scissors';
     break;
     case 2:
     return 'paper';
     break;
  }               
};

let computerSelection = '';
let playerSelection = '';
// THIS FUNCTION plays a single round of the game.
function playRound(event, computerSelection) {
    // When button is pressed:
    if (event !== undefined) {
        if (event.target.id === 'rock-btn') {
            playerSelection = 'rock';
        }
        if (event.target.id === 'paper-btn') {
            playerSelection = 'paper';
        }
        if (event.target.id === 'scissors-btn') {
            playerSelection = 'scissors';
        }
        console.log(`You selected ${playerSelection}!`);
    }
    // After player selects, run game
   
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    const container = document.querySelector('#results');
    container.classList.add('result');

    if (playerSelection == undefined) {
        console.log('playerSelection is undefined');
    }
    if (playerSelection == computerSelection) {
        container.textContent = 'Tie!';
        return 0;
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            container.textContent = 'You won! Rock beats Scissors';
            return 1;             
        } else {
            container.textContent = 'You lost! Paper beats Rock';
            return 2;
        }
    } if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            container.textContent = 'You won! Scissors beats Paper';
            return 1;
        } else {
            container.textContent = 'You lost! Paper beats Rock';
            return 2;
        }
    } if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            container.textContent = 'You won! Paper beats Rock';
            return 1;
        } else {
            container.textContent = 'You lost! Rock beats Paper';
            return 2;
        }
    } 
};
// Declares buttons
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', playRound);
const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', playRound);
const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', playRound);

playRound(event, computerSelection);