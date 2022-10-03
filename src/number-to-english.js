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
  if (tensDigit === 1 && onesDigit === 1) {
    return 'eleven';
  }
  if (tensDigit === 1 && onesDigit === 2) {
    return 'twelve';
  }
  if (tensDigit === 1 && onesDigit === 3) {
    return 'thirteen';
  }
}

function toEnglish() {
  let numberArray = []; // 575 “five hundred seventy-five”

  let number = this;
  const string = number.toString();
  for (let i = 0; i < string.length; i++) {
    const thisFirstPlace = number % 10;
    numberArray.push(thisFirstPlace);
    number = Math.floor(number / 10);
  }
  numberArray = numberArray.reverse();

  const output = [];

  // 5, 75 4
  for (let i = numberArray.length - 1; i >= 0; i -= 3) {
    const hundredTokens = [];
    if (i - 2 >= 0) {
      hundredTokens.push(digitToOnesPlace(numberArray[i - 2]));
      hundredTokens.push('hundred')
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
    output.push(hundredTokens.join(' '));
  }

  return output.reverse().join(' ');
}


Number.prototype.toEnglish = toEnglish;
module.exports.toEnglish = toEnglish;