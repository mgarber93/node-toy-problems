
/**
 * 'foo' 0 1
 * 'ofo'  
 * @param {string} string 
 * @param {number} leftIndex 
 * @param {number} rightIndex 
 */
function swap(string, leftIndex, rightIndex) {
  const swapped = [];
  for (let i = 0; i < string.length; i++) {
    if (i === leftIndex) {
      swapped.push(string.charAt(rightIndex));
    }
    else if (i === rightIndex)
    {
      swapped.push(string.charAt(leftIndex));
    }
    else {
      swapped.push(string.charAt(i));
    }
  }
  return swapped.join('');
}

/**
 * returns the next bigger number
 * a * 10 ^ n + b * 10 ^ (n - 1) ... z
 */
function nextBigger(input) {
  const phrases = [input];
  const inputAsAString = String(input);
  for (let i = 0; i < inputAsAString.length; i++) {
    for (let j = i + 1; j < inputAsAString.length; j++) {
      const result = swap(inputAsAString, i, j);
      const number = Number(result);
      phrases.push(number);
    }
  }
  let minimum = NaN;
  for (const phrase of phrases) {
    if ((isNaN(minimum) || phrase < minimum) && phrase > input) {
      minimum = phrase;
    }
  }
  return minimum;
}

module.exports.nextBigger = nextBigger;
