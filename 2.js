function decodeString(s) {
  var output = [];
  var comb = [];
  var array = s.split('').filter(el => el != '[' && el !=']');
  for (var i = array.length - 1; i >= 0; i--) {
    if (parseInt(array[i])) {
      var num = parseInt(array[i]);
      for (var j = num; j > 0; j--) {
        for (var k = array.length - 1; k >= i; k--) {
          if (!parseInt(array[k])) {
            comb.push(array[k]);
            output = comb;
          }
        } 
      }
      array[i + 1] = comb.join('');
      comb = [];
    }
  }
  return output.reverse().join('');
}

decodeString('2[b3[a]');

