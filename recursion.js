
function powerOf(a, b) {
    if (b === 0) {
      return 1;
    } else {
      return a * powerOf(a, b - 1);
    }
  }
  
  console.log(powerOf(2, 5));
  console.log(powerOf(7, 3));
  console.log(powerOf(12, 2));
  console.log(powerOf(9, 4));