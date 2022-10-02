// 7 > “seven”
// 575 > “five hundred seventy-five”
// 78,193,512 > “seventy-eight million one hundred ninety-three thousand five hundred twelve
// 0 > “zero”

require("./number-to-english");

describe('toEnglish', () => {
  test('is a method on numbers', () => {
    const number = 4;
    expect(typeof number.toEnglish).toBe(typeof console.log);
  });

  test('works for 0', () => {
    const number = 0;
    expect(number.toEnglish()).toBe('zero');
  });

  test('works for 7', () => {
    const number = 7;
    expect(number.toEnglish()).toBe('seven');
  });

  test('works for 575', () => {
    const number = 575;
    expect(number.toEnglish()).toBe('five hundred seventy-five');
  });

  test('works for 78,193,512', () => {
    const number = 78193512;
    expect(number.toEnglish()).toBe('seventy-eight million one hundred ninety-three thousand five hundred twelve');
  })
});
