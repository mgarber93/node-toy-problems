
/**
 * Complete the function scramble(str1, str2) that returns true if a portion  
 * of str1 characters can be rearranged to match str2, otherwise returns false. 
 * https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * @param {string} str1 
 * @param {string} str2 
 */
function scramble(str1, str2) {
  const characterCount = new Map();
  for (const char of str1.split('')) {
    if (!characterCount.has(char)) {
      characterCount.set(char, 1)
    } else {
      characterCount.set(char, characterCount.get(char) + 1);
    }
  }
  for (const char of str2.split('')) {
    if (!characterCount.has(char)) {
      return false;
    } else {
      const charCount = characterCount.get(char);
      if (charCount === 0) {
        return false;
      }
      characterCount.set(char, characterCount.get(char) - 1);
    }
  }
  return true;
}

module.exports.scramble = scramble;