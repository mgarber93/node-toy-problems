const { nextBigger } = require('./next-bigger');

describe.each([
  [12, 21],
  [513, 531],
  [2017, 2071],
])('nextBigger(%i)', (input, expected) => {
  test(`returns ${expected}`, () => {
    expect(nextBigger(input)).toBe(expected);
  });
});

