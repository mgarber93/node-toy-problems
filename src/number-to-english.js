function digitToOnesPlace(digit) {
  switch (digit) {
    case 0:
      return 'zero'
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
    default:
      throw new Exception(`unknown! ${digit}`)
  }
}

function digitToTensPlacePrefix(digit) {
  switch (digit) {
    case 0:
      return ''
    case 1:
      return ''
    case 2:
      return 'twenty-'
    case 3:
      return 'thirty-'
    case 4:
      return 'fourty-'
    case 5:
      return 'fifty-'
    case 6:
      return 'sixty-'
    case 7:
      return 'seventy-'
    case 8:
      return 'eighty-'
    case 9:
      return 'ninety-'
    default:
      throw new Exception(`unknown! ${digit}`)
  }
}

function twoDigitEnglishEdgeCases(tensDigit, onesDigit) {
  if (tensDigit === 1) {
    switch (onesDigit) {
      case 1:
        return 'eleven';
      case 2:
        return 'twelve';
      case 3:
        return 'thirteen';
      case 4:
        return 'fourteen';
      case 5:
        return 'fifteen';
      case 6:
        return 'sixteen';
      case 7:
        return 'seventeen';
      case 8:
        return 'eighteen';
      case 9:
        return 'nineteen';
    }
  }
}

const units = [
  'thousand',
  'million',
  'billion',
];

function toEnglish() {
  let numberArray = [];

  let number = this;
  const string = number.toString();
  for (let i = 0; i < string.length; i++) {
    const thisFirstPlace = number % 10;
    numberArray.push(thisFirstPlace); // O(1)
    number = Math.floor(number / 10);
  }
  numberArray = numberArray.reverse(); // O(number of digits)

  const threeCharacterChunks = [];
  for (let i = numberArray.length - 1; i >= 0; i -= 3) {
    const hundredTokens = [];
    if (i - 2 >= 0) {
      hundredTokens.push(`${digitToOnesPlace(numberArray[i - 2])} hundred`); // O(1)
    }
    if (i - 1 >= 0) {
      const edgeCase = twoDigitEnglishEdgeCases(numberArray[i - 1], numberArray[i]);
      if (edgeCase) {
        hundredTokens.push(edgeCase);
      } else {
        const tens = digitToTensPlacePrefix(numberArray[i - 1])
        const ones = digitToOnesPlace(numberArray[i]);
        hundredTokens.push(`${tens}${ones}`)
      }
    } else if (i >= 0) {
      hundredTokens.push(digitToOnesPlace(numberArray[i]));
    }
    threeCharacterChunks.push(hundredTokens.join(' '));
  }

  for (let i = 1; i < threeCharacterChunks.length; i++) {
    threeCharacterChunks[i] += ` ${units[i - 1]}`;
  }
  threeCharacterChunks.reverse();

  return threeCharacterChunks.join(' ');
}


Number.prototype.toEnglish = toEnglish;
module.exports.toEnglish = toEnglish;