const calculatePrice = require("./calculatePrice");

test("Test user buying A product", () => {
  expect(calculatePrice.calculateProductPrice(55, "A", false, false)).toBe(70);
});

test("Test user aged under 21 buying A product", () => {
  expect(calculatePrice.calculateProductPrice(20, "A", false, false)).toBe(
    "Customer does not meet the purchase requirements."
  );
});

test("User aged 21 buying A product", () => {
  expect(calculatePrice.calculateProductPrice(21, "A", false, false)).toBe(36);
});

test("User aged 21 buying B product", () => {
  expect(calculatePrice.calculateProductPrice(21, "B", false, false)).toBe(36);
});

test("User aged 21 buying C product", () => {
  expect(calculatePrice.calculateProductPrice(21, "C", false, false)).toBe(
    "Customer does not meet the purchase requirements."
  );
});

test("User aged 25 buying C product", () => {
  expect(calculatePrice.calculateProductPrice(25, "C", false, false)).toBe(
    "Customer does not meet the purchase requirements."
  );
});

test("User aged 26 buying C product", () => {
  expect(calculatePrice.calculateProductPrice(26, "C", false, false)).toBe(41);
});

test("User buys D product", () => {
  expect(calculatePrice.calculateProductPrice(26, "D", false, false)).toBe(
    49.2
  );
});

test("User made any returns in the past buying A product", () => {
  expect(calculatePrice.calculateProductPrice(21, "A", true, false)).toBe(186);
});

test("Loyalty member buys A product", () => {
  expect(calculatePrice.calculateProductPrice(21, "A", false, true)).toBe(32.4);
});

test("loyalty member buys D product", () => {
  expect(calculatePrice.calculateProductPrice(30, "D", false, true)).toBe(48.6);
});

test("Loyalty member that had returns in the past buying A product", () => {
  expect(calculatePrice.calculateProductPrice(21, "A", true, true)).toBe(167.4);
});

test("Loyalty member that had returns in the past buying D product", () => {
  expect(calculatePrice.calculateProductPrice(30, "D", true, true)).toBe(183.6);
});
