const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(...input) {
  return input.flat()
    .map(item => Number(item))
    .filter(item => !isNaN(item))
    .reduce((total, item) => total + item, 0);	
};

const multiply = function(...input) {
  return input.flat()
    .map(item => Number(item))
    .filter(item => !isNaN(item))
    .reduce((total, item) => total * item, 1);	
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(a) {
  a = +a;
  if (a == 0) return 1;
  if (a < 0 || typeof a !== "number" || !Number.isInteger(a)) 
    return "ERROR: Provide a non-negative integer.";
  
  let result = 1;
  while (a > 1) {
    result *= a;
    a--;     
  }	
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
