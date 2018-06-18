function changePossibilities(amount,denominations) {
  var count = 0;
  for (var i = denominations.length - 1; i >= 0; i--) {
    if (amount % denominations[i] === 0) {
      count += 1;
      for (var k = i - 1; k >= 0; k--) {
          if ((amount - denominations[i]) % denominations[k] === 0) {
            count += 1;
          } 
            }
    } else {
        for (var j = denominations.length - 1; j >= 0; j--) {
          if ((amount - denominations[i]) % denominations[j] === 0) {
            count += 1;
          } 
        }
      }
    }
  console.log(count);
  return count;
}

changePossibilities(5, [1, 2, 3, 4]);