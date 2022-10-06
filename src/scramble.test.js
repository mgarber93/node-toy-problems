const {scramble} = require('./scramble');


describe.each([
  ['rkqodlw', 'world', true],
  ['cedewaraaossoqqyt', 'codewars', true],
  ['katas', 'steak', false]
])('scramble(%s, %s)', (str1, str2, expected) => {
  test(`returns ${expected}`, () => {
    expect(scramble(str1, str2)).toEqual(expected);
  })
})