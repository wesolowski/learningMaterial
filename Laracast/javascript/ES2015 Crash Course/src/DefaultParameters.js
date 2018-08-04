function applyDiscount(cost, discount) {
    discount = discount || .10;
    return cost - (cost * discount);
}

console.log(applyDiscount(100, .40)); //60
console.log(applyDiscount(100)); //90

function applyDiscountNew(cost, discount = .10) {
    return cost - (cost * discount);
}

console.log(applyDiscountNew(100, .40)); //60
console.log(applyDiscountNew(100)); //90

function defaultDiscountRate() {
    return .10;
}

function applyDiscountNewFn(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

console.log(applyDiscountNewFn(100, .40)); //60
console.log(applyDiscountNewFn(100)); //90
