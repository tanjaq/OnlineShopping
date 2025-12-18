function applyAgeRestrictions(customerAge, productType) {
    if (customerAge < 21) { 
        return false;
    }

    if (customerAge >= 21 && customerAge <= 25 && ["C", "D"].includes(productType)) {
        return false;
    }

    return true;
}

function applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember) {
    if (productType === "D") {
        basePrice *= 1.2;
    }

    if (hasReturns) {
        basePrice += 150;
    }

    if (isLoyaltyMember) {
        basePrice *= 0.9; 
    }

    return basePrice;
}
function generateProductPrice(productType) {
    // Base prices for each type
    const basePrices = {
        "A": 50,
        "B": 100,
        "C": 500,
        "D": 1000
    };

    // Ensure product type exists
    if (!basePrices[productType]) {
        throw new Error(`Unknown product type: ${productType}`);
    }

    return basePrices[productType];
}

function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {
    const MAX_PRODUCT_PRICE = 2000;
    const MIN_PRODUCT_PRICE = 15;

    if (!applyAgeRestrictions(customerAge, productType)) {
        return "Customer does not meet the purchase requirements.";
    }

    let basePrice = generateProductPrice(productType);

    basePrice = applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember);

    if (basePrice > MAX_PRODUCT_PRICE) {
        return `Maximum price exceeded: $${MAX_PRODUCT_PRICE}`;
    }

    if (basePrice < MIN_PRODUCT_PRICE) {
        return `Minimum price not met: $${MIN_PRODUCT_PRICE}`;
    }

    return basePrice;
}
exports.calculateProductPrice = calculateProductPrice;
