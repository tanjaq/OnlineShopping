const calculatePrice = require('./calculatePrice');

test('Test user buying A product', () => {
  // Age 55 + 15 = 70
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(70);
});

test('Under 21 should be rejected', () => {
  expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe("Customer does not meet the purchase requirements.");
});

test('Age 21-25 cannot buy type C or D', () => {
  expect(calculatePrice.calculateProductPrice(22, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
  expect(calculatePrice.calculateProductPrice(22, 'D', false, false)).toBe("Customer does not meet the purchase requirements.");
});

test('Type D product increases price by 20%', () => {
  // Age 30 + 15 = 45; 45 * 1.2 = 54
  expect(calculatePrice.calculateProductPrice(30, 'D', false, false)).toBe(54);
});

test('Previous returns increase price by $150', () => {
  // Age 30 + 15 = 45; 45 + 150 = 195
  expect(calculatePrice.calculateProductPrice(30, 'A', true, false)).toBe(195);
});

test('Loyalty members receive 10% discount', () => {
  // Age 35 + 15 = 50; 50 * 0.9 = 45
  expect(calculatePrice.calculateProductPrice(35, 'A', false, true)).toBe(45);
});

test('Maximum price limit', () => {
  // Extremely high age to trigger limit
  expect(calculatePrice.calculateProductPrice(2000, 'D', true, false)).toBe("Maximum price exceeded: $2000");
});