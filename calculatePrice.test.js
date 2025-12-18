const calculatePrice = require('./calculatePrice');

describe('OnlineShopping price calculation with product-type base prices', () => {

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(50);
  });

  test('Customer under 21 cannot purchase', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false))
      .toBe('Customer does not meet the purchase requirements.');
  });

  test('Customer 21-25 cannot buy type C or D', () => {
    expect(calculatePrice.calculateProductPrice(23, 'C', false, false))
      .toBe('Customer does not meet the purchase requirements.');
    expect(calculatePrice.calculateProductPrice(21, 'D', false, false))
      .toBe('Customer does not meet the purchase requirements.');
  });

  test('Type D product increases price by 20%', () => {
    const typeCPrice = calculatePrice.calculateProductPrice(30, 'C', false, false);
    const typeDPrice = calculatePrice.calculateProductPrice(30, 'D', false, false);
    expect(typeDPrice).toBeGreaterThan(typeCPrice);
    expect(typeDPrice).toBeCloseTo(1000 * 1.2); // type D base price * 1.2
  });

  test('Customer with past returns adds $150', () => {
    const basePrice = calculatePrice.calculateProductPrice(30, 'A', true, false);
    const baseWithoutReturns = calculatePrice.calculateProductPrice(30, 'A', false, false);
    expect(basePrice).toBe(baseWithoutReturns + 150);
  });

  test('Loyalty member gets 10% discount', () => {
    const nonLoyal = calculatePrice.calculateProductPrice(30, 'B', false, false);
    const loyal = calculatePrice.calculateProductPrice(30, 'B', false, true);
    expect(loyal).toBeCloseTo(nonLoyal * 0.9);
  });

  test('Maximum price never exceeds $2000', () => {
    const price = calculatePrice.calculateProductPrice(30, 'D', true, true); // type D + return + loyalty
    expect(price).toBeLessThanOrEqual(2000); // sanity check
  });

  test('Minimum price enforced', () => {
    const price = calculatePrice.calculateProductPrice(21, 'A', false, false);
    expect(price).toBeGreaterThanOrEqual(15);
  });

});
