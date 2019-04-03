const clockAngleCalculator = require('./app');

test('the angle at 0:0 is 0 degrees', () => {
  expect(clockAngleCalculator(0, 0)).toBe('0 degrees');
});

test('the angle at 23:45 is 78 degrees', () => {
  expect(clockAngleCalculator(23, 45)).toBe('78 degrees');
});

test('the angle at 00:30 is 168 degrees', () => {
  expect(clockAngleCalculator(0, 30)).toBe('168 degrees');
});

test('the angle at 17:30 is 18 degrees', () => {
  expect(clockAngleCalculator(17, 30)).toBe('18 degrees');
});

test('the angle at 18:30 is 12 degrees', () => {
  expect(clockAngleCalculator(18, 30)).toBe('12 degrees');
});