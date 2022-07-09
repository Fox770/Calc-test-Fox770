import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
});
test('5*5=25', () => {
  expect(calculator(5, '*', 5)).toBe(25);
});
test('10+2=12', () => {
  expect(calculator(10, '+', 2)).toBe(12);
});
test('7-3=4', () => {
  expect(calculator(7, '-', 3)).toBe(4);
});
test('12/4=3', () => {
  expect(calculator(12, '/', 4)).toBe(3);
});
test('throw error when operand A is not a number', () => {
  expect(() => calculator('&', '-', 3)).toThrow();
});
test('throw error when operand B is not a number', () => {
  expect(() => calculator(4, '+', '%')).toThrow();
});
test('throw error when operator is not valid', () => {
  expect(() => calculator(5, '#', 3)).toThrow();
});

describe('Calculator parametric test', () => {
  test.each`
    a     | op     | b    | expected
    ${5}  | ${'*'} | ${5} | ${25}
    ${10} | ${'+'} | ${2} | ${12}
    ${7}  | ${'-'} | ${3} | ${4}
    ${12} | ${'/'} | ${4} | ${3}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
