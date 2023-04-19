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

let player3 = {
    name: 'Bubbly',
    hand: hands[getHand()],
    wins: 0
};

let player4 = {
    name: 'Snoopy',
    hand: hands[getHand()],
    wins: 0
};

function playRound(p1, p2){
    const a = p1.hand;
    const b = p2.hand;

    if((a === 'Rock' && b === 'Rock')||(a === 'Paper' && b === 'Paper')||(a === 'Scissors' && b === 'Scissors')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log("It's a Tie!");
        return null;
    } else if ((a === 'Rock' && b === 'Scissors')||(a === 'Scissors' && b === 'Paper')||(a === 'Paper' && b === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(p1.name, 'Wins!');
        return false;

    } else if ((b === 'Rock' && a === 'Scissors')||(b === 'Scissors' && a === 'Paper')||(b === 'Paper' && a === 'Rock')){
        console.log('Player1 hand:', a + '   Player2 hand:', b);
        console.log(p2.name, 'Wins!');
        return true;
    }
}

// ... your existing code

function playGame(player1, player2, playUntil) {
    while (player1.wins < playUntil && player2.wins < playUntil) {
        let winner = playRound(player1, player2);
        if (winner === false) {
            player1.wins++;
        } else if (winner === true) {
            player2.wins++;
        }
        player1.hand = hands[getHand()];
        player2.hand = hands[getHand()];
    }

    return player1.wins >= playUntil ? player1 : player2;
}

function playTournament(player1, player2, player3, player4, playUntil) {
    console.log("First round:");
    let winner1 = playGame(player1, player2, playUntil);
    console.log(winner1.name, "won the first round!");

    let winner2 = playGame(player3, player4, playUntil);
    console.log(winner2.name, "won the second round!");

    console.log("Final round:");
    let tournamentWinner = playGame(winner1, winner2, playUntil);
    console.log(tournamentWinner.name, "is the world champion");
}

// Play a game to 3 wins
let gameWinner = playGame(player1, player2, 3);
console.log(gameWinner.name, "won the game!");

// Play a tournament
playTournament(player1, player2, player3, player4, 3);