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
    } else {
        return 2;
    }
}
function intToPlay(play){
    if (play === 0) {
        return 'rock';
    } else if (play === 1) {
        return 'paper';
    } else {
        return 'scissor';
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
        return 'It\'s a draw!';
    } else if (win[player][computer] === 1) {
        return `You Lose! ${computerSelection} beats ${x}`;
    } else if (win[player][computer] === 0) {
        return `You win! ${x} beats ${computerSelection}`;
    }
}





