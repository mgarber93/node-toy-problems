const { scramble } = require('./scramble');


describe.each([
  ['rkqodlw', 'world', true],
  ['cedewaraaossoqqyt', 'codewars', true],
  ['katas', 'steak', false],
  ['rkqodlw', 'world', true],
  ['cedewaraaossoqqyt', 'codewars', true],
  ['katas', 'steak', false],
  ['scriptjavx', 'javascript', false],
  ['scriptingjava', 'javascript', true],
  ['scriptsjava', 'javascripts', true],
  ['javscripts', 'javascript', false],
  ['jscripts', 'javascript', false],
  ['aabbcamaomsccdd', 'commas', true],
  ['commas', 'commas', true],
  ['sammoc', 'commas', true]
])('scramble(%s, %s)', (str1, str2, expected) => {
  test(`returns ${expected}`, () => {
    expect(scramble(str1, str2)).toEqual(expected);
  })
})