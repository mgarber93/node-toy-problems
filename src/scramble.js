
/**
 * Complete the function scramble(str1, str2) that returns true if a portion  
 * of str1 characters can be rearranged to match str2, otherwise returns false. 
 * @param {string} str1 
 * @param {string} str2 
 */
function scramble(str1, str2) {
  const string1Characters = new Set(str1.split(''));
  return str2.split('').every(character => string1Characters.has(character));
}

module.exports.scramble = scramble;