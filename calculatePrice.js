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
    let price = basePrice;

    if (productType === "D") {
        price *= 1.20;
    }

    if (hasReturns) {
        price += 150;
    }

    if (isLoyaltyMember) {
        price *= 0.90;
    }

    return price;
}

function generateProductPrice(customerAge) {
    const price = customerAge + 15;
    return price < 15 ? 15 : price;
}

function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {
    const MAX_PRODUCT_PRICE = 2000;

    if (!applyAgeRestrictions(customerAge, productType)) {
        return "Customer does not meet the purchase requirements.";
    }

    let currentPrice = generateProductPrice(customerAge);

    currentPrice = applyProductPriceRules(currentPrice, productType, hasReturns, isLoyaltyMember);

    if (currentPrice > MAX_PRODUCT_PRICE) {
        return `Maximum price exceeded: $${MAX_PRODUCT_PRICE}`;
    }

    return currentPrice;
}

exports.calculateProductPrice = calculateProductPrice;