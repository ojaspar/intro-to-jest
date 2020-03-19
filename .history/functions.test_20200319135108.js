const { add, addMultipleNum, falsyValue } = require('./functions');

test('add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
test('add multiple numbers together', () => {
  expect(addMultipleNum(2, 4, 4, 4)).toBe(14);
});
test('return a falsy value', () => {
  expect(falsyValue(null)).toBeFalsy();
});
