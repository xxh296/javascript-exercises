const sumAll = function(firstNumber, lastNumber) {
    // formula : (n / 2) * (firstNumber + lastNumber)
    // where n is the number of numbers in the range
    // needs +1 correction, as most ranges don't start with 0
    // TODO: a conditional to include 0

    if (firstNumber < 0 || lastNumber < 0) return "ERROR";
    if (!Number.isInteger(firstNumber+lastNumber)) return "ERROR"; 

    if (firstNumber > lastNumber) {
        const tempNumber = firstNumber;
        firstNumber = lastNumber;
        lastNumber = tempNumber;
    }
    //debug
    // console.log(lastNumber);

    return ((lastNumber - firstNumber + 1) / 2) * (firstNumber + lastNumber);



};

// const sum = sumAll(15, 10);
// console.log(sum);

// Do not edit below this line
module.exports = sumAll;
