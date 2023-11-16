const calculatePrice = require('./calculatePrice');

describe('Customers under the age of 21 cannot purchase any products.', () => {

  test('Test user age 20 buying product', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toMatch(/Customer does not meet the purchase requirements./);
  });

  test('Test user age 21 buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(21);
  });

  test('Test user age 25 buying A product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'A', false, false)).toBe(25);
  });
})

describe('Customers aged 21-25 can only purchase type A or B products.', () => {

  test('Test user age 25 buying B product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'B', false, false)).toBe(25);
  });

  test('Test user age 25 buying C product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'C', false, false)).toMatch(/Customer does not meet the purchase requirements./);
  });

  test('Test user age 25 buying D product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'D', false, false)).toMatch(/Customer does not meet the purchase requirements./);
  });

  test('Test user age 26 buying C product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'C', false, false)).toBe(26);
  });

  test('Test user age 26 buying D product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(31.2);
  });
})

describe('Type D products are always 20% more expensive. (User meets requirements)', () => {

  test('Test user buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'A',false,false)).toBe(27);
  });

  test('Test user buying D product', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'D',false,false)).toBe(32.4);
  });

})

describe('If the customer has made any returns in past, the price is increased by $150. (User meets requirements)', () => {

  test('Test user buying A product & NOT made returns in past', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'A',false,false)).toBe(27);
  });

  test('Test user buying A product & made returns in past', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'A',true,false)).toBe(27+150);
  });

  test('Test user buying D product & NOT made returns in past', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'D',false,false)).toBe(27*1.20);
  });

  test('Test user buying D product & made returns in past', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'D',true,false)).toBe(27*1.20+150);
  });

})

describe('Loyalty members receive a 10% discount. (User meets requirements)', () =>{
  
  test('Test user buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'A',false,false)).toBe(27);
  });

  test('Test loyalty member user buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'A',false,true)).toBe(27*0.90);
  });

  test('Test loyalty member user buying D product', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'D',false,true)).toBe((27*1.20)*0.90);
  });

  test('Test loyalty member user buying D product & have returns', () =>{
    expect(calculatePrice.calculateProductPrice(27, 'D',true,true)).toBe((27*1.20+150)*0.90);
  });


})

describe('The maximum price for any product is $2000. (User meets requirements)', () =>{
  
  test('Test user age 1999 buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(1999, 'A',false,false)).toBe(1999);
  });
  test('Test user age 2000 buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(2000, 'A',false,false)).toBe(2000);
  });
  test('Test user age 2001 buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(2001, 'A',false,false)).toMatch('Maximum price exceeded: $2000');
  });
  test('Test loyalty member user age 2001 buying A product', () =>{
    expect(calculatePrice.calculateProductPrice(2001, 'A',false,true)).toBe(2001*0.90);
  });


})

describe('Additional type tests', () =>{
  test('Test user buying F product', () =>{
    expect(calculatePrice.calculateProductPrice(27,'F',false,false)).toMatch(/Incorect product type!/);
  })
  test('Test user age "sew" buying A product', () =>{
    expect(calculatePrice.calculateProductPrice('sew','A',false,false)).toMatch(/Incorect age type!/);
  })
})