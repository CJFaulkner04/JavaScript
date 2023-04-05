let billAmount = 12;

function calculateTip(a) {
    let tip = a *.2;
    return tip.toFixed(2);
}

console.log(calculateTip(billAmount));