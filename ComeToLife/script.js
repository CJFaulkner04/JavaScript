const hands = ['Rock', 'Paper', 'Scissors'];
const player1W=0;
const player2W=0;

function getHand(){
    return parseInt(Math.random()*10)%3;
}

let player1 = {
    name: 'Erin',
    hand: hands[getHand()]
};

let player2 = {
    name: 'Hector',
    hand: hands[getHand()]
};

function playRound(c, d){
    const a = c;
    const b = d;

    if((a === 'Rock' && b === 'Rock')||(a === 'Paper' && b === 'Paper')||(a === 'Scissors' && b === 'Scissors')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log("It's a Tie!");
        return null;
    } else if ((a === 'Rock' && b === 'Scissors')||(a === 'Scissors' && b === 'Paper')||(a === 'Paper' && b === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(player1.name, 'Wins!');
        return false;
    } else if ((b === 'Rock' && a === 'Scissors')||(b === 'Scissors' && a === 'Paper')||(b === 'Paper' && a === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(player2.name, 'Wins!');
        return true;
    }
}


const main = document.querySelector('section');

let player1Wins = 0;
let player2Wins = 0;

function playGame() {
    player1.hand = hands[getHand()];
    player2.hand = hands[getHand()];

    let result = playRound(player1.hand, player2.hand);
    let gameResult = document.getElementById('gameResult');

    if (result === null) {
        gameResult.innerText = "It's a Tie!";
    } else if (result === false) {
        player1Wins++;
        gameResult.innerText = "Erin Wins!";
    } else {
        player2Wins++;
        gameResult.innerText = "Hector Wins!";
    }

    updateScore();
}

function updateScore() {
    let scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerText = `Erin: ${player1Wins} - Hector: ${player2Wins}`;
}
  
  

