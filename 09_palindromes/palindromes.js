const palindromes = function (input) {
    input = input.toLowerCase().replace(/[^a-zA-Z]/g, "");
    const reversedString = input.split("").reverse().join("");
    return input === reversedString;
};
// console.log(palindromes("y2ah3ha2yZZZZ"));

// Do not edit below this line
module.exports = palindromes;
