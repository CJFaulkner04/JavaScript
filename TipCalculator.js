let billAmount = 200;

function calculateTip(a) {
    let tip = a *.2;
    return tip;
}

function getBillTotal(a){
    let total = calculateTip(a) + a;
    return total;
}

console.log('subTotal: $' + billAmount);
console.log('tip: $' + calculateTip(billAmount).toFixed(2))
console.log('Total: $' + getBillTotal(billAmount).toFixed(2));