function sortByStrings(s,t) {
  var newString = [];
  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s[j] === t[i]) {
        newString.push(s[j]);
      }
    }
  }
  return newString.join('');
}

