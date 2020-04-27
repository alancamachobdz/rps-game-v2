function playerSelect() {
    let playerSelection;
    if (rockBtn) {
        playerSelection = 'rock';
    } else if (paperBtn) {
        playerSelection = 'paper';
    } else if (scissorsBtn) {
        playerSelection = 'scissors';
    } else {
        console.log('error');
    }
    console.log(playerSelection);
    return playerSelection;
}

const rockBtn = document.querySelector('.rock-btn');
rockBtn.addEventListener('click', playerSelect);

const paperBtn = document.querySelector('.paper-btn');
paperBtn.addEventListener('click', playerSelect);

const scissorsBtn = document.querySelector('.scissors-btn');
scissorsBtn.addEventListener('click', playerSelect);
