const sumAll = function(firstNumber, lastNumber) {
    // formula : ((n / 2) + 1) * (firstNumber + lastNumber)

    if (firstNumber < 0 || lastNumber < 0) return "ERROR";
    if (!Number.isInteger(firstNumber+lastNumber)) return "ERROR"; 
    if (firstNumber > lastNumber) {
        const tempNumber = firstNumber;
        firstNumber = lastNumber;
        lastNumber = tempNumber;
    }

    return ((lastNumber - firstNumber + 1) / 2) * (firstNumber + lastNumber);
};

// Do not edit below this line
module.exports = sumAll;
