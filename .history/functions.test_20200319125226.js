const { add } = require('./functions');

TextDecoderStream('add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
