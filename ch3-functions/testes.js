const power = function (base, exponent) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 3));

//o ovo ou a galinha
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");

