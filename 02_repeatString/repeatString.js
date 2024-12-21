// const repeatString = function() {

// };

// let result;

function repeatString(string, num) {
    if (num <0) {
        return "ERROR";
    }
    
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
}

//repeatString("hey", 3);
//DEBUG
// console.log(result);

// Do not edit below this line
module.exports = repeatString;
