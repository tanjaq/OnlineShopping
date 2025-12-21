const calculatePrice = require('./calculatePrice');

test('Test user buying A product', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(70);
});

test('People under 21 cant buy stuff', () => {
  expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe(
    'Customer does not meet the purchase requirements.'
  );
});

test('Young adults 21-25 cant get C or D products', () => {
  expect(calculatePrice.calculateProductPrice(22, 'C', false, false)).toBe(
    'Customer does not meet the purchase requirements.'
  );
});

test('type D stuff costs 20% extra', () => {
  expect(calculatePrice.calculateProductPrice(30, 'D', false, false)).toBeCloseTo(54);
});

test('Returning something adds $150 fee', () => {
  expect(calculatePrice.calculateProductPrice(30, 'A', true, false)).toBe(195);
});

test('Loyalty members get 10% off', () => {
  expect(calculatePrice.calculateProductPrice(30, 'A', false, true)).toBeCloseTo(40.5);
});

test('Price too high shows error', () => {
  expect(calculatePrice.calculateProductPrice(2000, 'A', false, false)).toBe(
    'Maximum price exceeded: $2000'
  );
});