let numbers1 = [1, 2];
let numbers2 = [3, 4, 5, 6];
let numbers = [...numbers1, ...numbers2];


let squared = (n) => n*n;

const squares = numbers.map(squared);

let isEven = (n) => {
    if(n%2 == 0){
        return true;
    } else {
        return false;
    }
}

const evenSquares = squares.filter(n => isEven(n));

let firstEvenSquare = evenSquares[0];
let secondEvenSquare = evenSquares[1];

console.log(`Numbers: ${numbers}\nSquares: ${squares}\nEven Squares: ${evenSquares}\nExtracted Numbers: ${firstEvenSquare}, ${secondEvenSquare}`);