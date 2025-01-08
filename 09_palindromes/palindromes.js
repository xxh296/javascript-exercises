const palindromes = (input) => {
    input = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = input.split("").reverse().join("");
    return input === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
