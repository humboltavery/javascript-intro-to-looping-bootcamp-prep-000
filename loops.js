function forLoop (array) {
  for (var i = 0; i < 24; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop');
    }
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

