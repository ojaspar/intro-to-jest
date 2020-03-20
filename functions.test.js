const { add, addMultipleNum, falsyValue, creatUser } = require('./functions');

test('add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
test('add multiple numbers together', () => {
  expect(addMultipleNum(2, 4, 4, 4)).toBe(14);
});
test('return a falsy value', () => {
  expect(falsyValue(null)).toBeFalsy();
});
// test('return a null value', () => {
//   expect(nullValue(null)).toBeNull();
// });
test('return a user', () => {
  expect(creatUser('jaspar', 'Ogbonna')).toStrictEqual({
    name: 'jaspar',
    lastname: 'Ogbonna'
  });
});

// Regex
test('You should be working from home', () => {
  expect('working').not.toMatch(/i/);
});

// less than and greater  than
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(160);
});
