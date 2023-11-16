const Errors = {
    ProductType:'Incorect product type!',
    AgeReq:"Customer does not meet the purchase requirements.",
    AgeType:'Incorect age type!',
}

function applyAgeRestrictions(customerAge, productType) {
    if (customerAge < 21) {
        return false;
    }

    if (customerAge <= 25 && ["c", "d"].includes(productType)) {
        return false;
    }

    return true;
}

function applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember) {

    if (productType === "d") {
        basePrice *= 1.20;
    }

    if (hasReturns) {
        basePrice += 150;
    }

    if (isLoyaltyMember) {
        basePrice *= 0.90;
    }

    if(basePrice<15){
        basePrice = 15;
    }

    return basePrice;
}


function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {

    // Checking if all inputs are correct type
    if(!productType.match(/[a-dA-D]/s)) return Errors['ProductType'];
    customerAge = parseInt(customerAge);
    if(isNaN(customerAge)) return Errors['AgeType'];

    // Main function
    const MAX_PRODUCT_PRICE = 2000;
    productType = productType.toLowerCase();
    productType = productType[0];

    if (!applyAgeRestrictions(customerAge, productType)) {
        return Errors['AgeReq'];
    }
    let basePrice = customerAge;

    basePrice = applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember);

    if (basePrice > MAX_PRODUCT_PRICE) {
        return `Maximum price exceeded: $${MAX_PRODUCT_PRICE}`;
    }

    return basePrice;
}

exports.calculateProductPrice = calculateProductPrice;
exports.applyAgeRestrictions = applyAgeRestrictions;
