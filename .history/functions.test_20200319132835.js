const { add, addMultipleNum } = require('./functions');

test('add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
test('add multiple numbers together', () => {
  expecct(addMultipleNum(2, 4, 4, 4)).toBe(true);
});
