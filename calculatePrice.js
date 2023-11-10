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
        basePrice *= 1.20;
    }

    if (hasReturns) {
        basePrice += 150;
    }

    if (isLoyaltyMember) {
        basePrice *= 0.90;
    }

    return basePrice;
}

function generateProductPrice(customerAge) {
    return basePrice = 20;
}

function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {
    const MAX_PRODUCT_PRICE = 2000;
    const MIN_PRODUCT_PRICE = 15;

    if (!applyAgeRestrictions(customerAge, productType)) {
        return "Customer does not meet the purchase requirements.";
    }
    let basePrice = generateProductPrice(customerAge);
    console.log(basePrice);

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
