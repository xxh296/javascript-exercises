const removeFromArray = function(arrayToTrim, ...itemsToRemove) {
    return arrayToTrim.filter(item => !itemsToRemove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
