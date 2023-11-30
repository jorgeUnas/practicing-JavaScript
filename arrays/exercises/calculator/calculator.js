const add = function(arr) {
	return a + b;
};

const subtract = function() {
	
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
    return arr.reduce((mult, current) => mult * current, 1);
};

const power = function(b , e) {
	return b**e;
};

const factorial = function(a) {
    if (a === 0) return 1;
    let result = 1;
	for(let i = a; i >=1; i--){
	    result *= i;
	}
	return result;
};

console.log(sum([0]));
console.log(sum([7]));
console.log(sum([13, 4, 1]));
console.log(multiply([13, 2, 5]));
console.log(power(2, 5));
console.log(factorial(4));


let myObj = {
    firstName: 'Jorge',
    lastName: 'Unas',
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(myObj.fullName());


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



