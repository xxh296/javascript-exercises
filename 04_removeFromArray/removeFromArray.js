const removeFromArray = function(arrayToTrim, a) {
    // Passes 1st test only
    // TODO - take any number of args
    //
    for (i=0; i<arrayToTrim.length; i++) {
        if(arrayToTrim[i] === a) arrayToTrim.splice(i, 1);
    }
    return arrayToTrim;
};

//DEBUG
let boo = removeFromArray([1, 2, 3, 4, 5, "hey"], 7);
console.log(boo);

// Do not edit below this line
module.exports = removeFromArray;
