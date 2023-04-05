let billAmount = 12;

function calculateTip(a) {
    let tip = a *.2;
    return tip;
}

function getBillTotal(a){
    let total = calculateTip(a) + a;
    return total.toFixed(2);
}

console.log(getBillTotal(billAmount));