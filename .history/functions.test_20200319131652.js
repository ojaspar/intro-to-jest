const { add } = require('./functions');

expect('add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
