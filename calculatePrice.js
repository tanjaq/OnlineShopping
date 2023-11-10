function applyAgeRestrictions(customerAge, productType) {
    if (customerAge < 21) {
        return false;
    }

    if (customerAge >= 21 && customerAge <= 25 && ["C", "D", "c", "d"].includes(productType)) {
        return false;
    }

    return true;
}

function applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember) {

    if (productType === "D") {
        console.log(basePrice)
        basePrice *= 1.20;
    }

    if (productType === "d") {
        basePrice *= 1.20;
    }

    if (hasReturns) {
        basePrice += 150;
    }

    if (isLoyaltyMember) {
        basePrice *= 0.90;
    }
    console.log(basePrice)
    return basePrice;
}

function generateProductPrice(customerAge) {
    return customerAge + 15;
}

function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {
    let num = 0;
    const MAX_PRODUCT_PRICE = 2000;

    if (!applyAgeRestrictions(customerAge, productType)) {
        return "Customer does not meet the purchase requirements.";
    }
    let basePrice = generateProductPrice(customerAge);

    basePrice = applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember);

    if (basePrice > MAX_PRODUCT_PRICE) {
        return 2000;
    }
    num = basePrice;
    return Math.round(num * 100)/100;
}

exports.calculateProductPrice = calculateProductPrice;
exports.applyAgeRestrictions = applyAgeRestrictions;
exports.applyProductPriceRules = applyProductPriceRules;
