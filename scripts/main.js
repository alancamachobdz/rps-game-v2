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

// THIS FUNCTION plays a single round of the game.
const computerSelection = computerPlay();
function playRound(e, computerSelection) {
    if (e.target.id === 'rock-btn') {
        playerSelection = 'rock';
    }
    if (e.target.id === 'paper-btn') {
        playerSelection = 'paper';
    }
    if (e.target.id === 'scissors-btn') {
        playerSelection = 'scissors';
    }
    console.log(`You selected ${playerSelection}!`);
    let result;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == undefined) {
        console.log('playerSelection is undefine');
    }
    if (playerSelection == computerSelection) {
        console.log('Tie!');
        return 0;
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('You won! Rock beats Scissors');
            return 1;             
        } else {
            console.log('You lost! Paper beats Rock')
            return 2;
        }
    } if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('You won! Scissors beats Paper');
            return 1;
        } else {
            console.log('You lost! Paper beats Rock');
            return 2;
        }
    } if (playerSelection == 'paper') {
        if (computerSelection = 'rock') {
            console.log('You won! Paper beats Rock');
            return 1;
        } else {
            console.log('You lost! Rock beats Scissors')
            return 2;
        }
    }    
};

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', playRound);
const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', playRound);
const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', playRound);

playRound();