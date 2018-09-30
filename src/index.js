// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }
    let currencies = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    }
    let currentCurancy = currency;
    let result = {};
    for (let key in currencies) {
        if (currentCurancy >= currencies[key]) {
            let value = Math.floor(currentCurancy / currencies[key]);
            result[key] = value;
            currentCurancy -= value * currencies[key];
        }
    }
    return result;
}