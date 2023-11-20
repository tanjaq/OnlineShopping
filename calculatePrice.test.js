const calculatePrice = require('./calculatePrice');

describe('Test 21-25 buying prohibited product', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
  });
  test('Test user buying B product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'D', false, false)).toBe("Customer does not meet the purchase requirements.");
  });
});

describe('Test 21-25 A buying product', () => {
  test('Test user 21 buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(20);
  });
  test('Test user buying 25 A product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'A', false, false)).toBe(20);
  });
});

describe('Test 26 buying product', () => {
  test('Test user 26 buying C product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'C', false, false)).toBe(20);
  });
  test('Test user 26 buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(24);
  });
});

describe('Test 21-25 buying A product', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(20);
  });
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', true, false)).toBe(170);
  });
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, true)).toBe(18);
  });
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', true, true)).toBe(153);
  });
});

describe('Test 26 buying D product', () => {
  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(24);
  });
  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', true, false)).toBe(174);
  });
  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, true)).toBe(21.6);
  });
  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', true, true)).toBe(156.6);
  });
});

describe('Test user age 20 buying A product', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe("Customer does not meet the purchase requirements.");
  });
});