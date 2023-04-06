
const hands = ['Rock', 'Paper', 'Scissors'];

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
        return player1.name;
    } else if ((b === 'Rock' && a === 'Scissors')||(b === 'Scissors' && a === 'Paper')||(b === 'Paper' && a === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(player2.name, 'Wins!');
        return player2.name;
    }
}

playRound(player1.hand, player2.hand); 