// 7 > “seven”
// 575 > “five hundred seventy-five”
// 78,193,512 > “seventy-eight million one hundred ninety-three thousand five hundred twelve
// 0 > “zero”

require('./number-to-english');

describe('toEnglish', () => {
  test('is a method on numbers', () => {
    const number = 4;
    expect(typeof number.toEnglish).toBe(typeof console.log);
  });
});

describe.each([
  [0, 'zero'],
  [7, 'seven'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
  [575, 'five hundred seventy-five'],
  [78193512, 'seventy-eight million one hundred ninety-three thousand five hundred twelve']
])('(%i).toEnglish()', (input, expected) => {
  test(`returns ${expected}`, () => {
    expect(input.toEnglish()).toBe(expected);
  });
});

