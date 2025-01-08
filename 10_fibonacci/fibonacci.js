const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) return "OOPS";
    if (index < 2) return index;
    // let sequence = [];
    return fibonacci(index - 1) + fibonacci(index - 2);
};

// Do not edit below this line
module.exports = fibonacci;
