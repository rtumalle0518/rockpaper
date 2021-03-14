function computerPlay(){
    let x = Math.floor(Math.random()*Math.floor(3));
    if (x === 0){
        return 'rock';
    } else if ( x === 1){
        return 'paper';
    } else {
        return 'scissor';
    }
}

function playToInt(play){
    if (play === 'rock') {
        return 0;
    } else if (play === 'paper') {
        return 1;
    } else if (play === 'scissor'){
        return 2;
    }
}

function playRound(playerSelection, computerSelection){
    const x = playerSelection.toLowerCase();

    const player = playToInt(x);
    const computer = playToInt(computerSelection);
    

    const win = [
        [2, 0, 0],
        [1, 2, 1],
        [1, 0, 2]
    ];
    
    if (win[player][computer] === 2) {
        console.log('It\'s a draw!');
        return 2;
    } else if (win[player][computer] === 1) {
        console.log(`You Lose! ${computerSelection} beats ${x}`);
        return 1;
    } else if (win[player][computer] === 0) {
        console.log(`You win! ${x} beats ${computerSelection}`);
        return 0;
    }
}

function game(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        playChoice = window.prompt('What\'s your choice?');

        if (playRound(playChoice, computerPlay()) === 0) {
           score++;
        }

    }
    if (score < 3){
        console.log('You Lost :(');
    } else {
        console.log('YOU WIN THE GAME!');
    }
    
}

game();




