const {truncate} = require('./truncate-string');

// https://www.codewars.com/kata/57af26297f75b57d1f000225

describe.each([
  ['codewars', 9, 'codewars'],
  ['codewars', 7, 'code...'],
  ['codewars', 2, 'co...'],
])('truncate(%s, %i)', (input, maximumLength, expected) => {
  test(`returns ${expected}`, () => {
    expect(truncate(input, maximumLength)).toEqual(expected);
  });
});