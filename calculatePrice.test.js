const calculatePrice = require('./calculatePrice');

test('Test user buying product A', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(70);
});
test('Test user under 21 trying to buy product any product', () =>{
  expect(calculatePrice.applyAgeRestrictions(20, 'C')).toBe(false)
});
test('Test user between 21 and 25 buying product C', () =>{
  expect(calculatePrice.applyAgeRestrictions(25, 'C')).toBe(false)
});
test('Product D is 20% more expensive', () => {
  expect(calculatePrice.calculateProductPrice(55, 'd', false, false)).toBe(84)
});
test('Test user tries buying something worth over $2000', () => {
  expect(calculatePrice.calculateProductPrice(2000, 'D', true, false)).toBe(2000)
})
test('Test user with returns buys product A', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', true, false)).toBe(220)
})
test('Loyal test user buys product A', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, true)).toBe(63)
})
test('Loyal test user buys product D with previous returns', () => {
  expect(calculatePrice.calculateProductPrice(50, 'D', true, true)).toBe(205.2)
})