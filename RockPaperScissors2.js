
const hands = ['Rock', 'Paper', 'Scissors'];

function getHand(){
    return parseInt(Math.random()*10)%3;
}

let player1 = {
    name: 'Erin',
    hand: hands[getHand()],
    wins: 0
};

let player2 = {
    name: 'Hector',
    hand: hands[getHand()],
    wins: 0
};

function playRound(p1, p2){
    const a = p1;
    const b = p2;

    if((a === 'Rock' && b === 'Rock')||(a === 'Paper' && b === 'Paper')||(a === 'Scissors' && b === 'Scissors')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log("It's a Tie!");
        return null;
    } else if ((a === 'Rock' && b === 'Scissors')||(a === 'Scissors' && b === 'Paper')||(a === 'Paper' && b === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(player1.name, 'Wins!');
        return false;
        
        return player1.name;
    } else if ((b === 'Rock' && a === 'Scissors')||(b === 'Scissors' && a === 'Paper')||(b === 'Paper' && a === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(player2.name, 'Wins!');
        return true;
    }
}

function playUntil(p1, p2, until){
    let p1wins = 0;
    let p2wins = 0;
    let ties = 0;
    while(p1wins < until || p2wins < until){
        if(playRound(p1, p2) == true){
            p2wins++;
        } else if(playRound(p1, p2) == false){
            p1wins++;
        } else{
            ties++;
        }
    }
}

playUntil(player1.hand)