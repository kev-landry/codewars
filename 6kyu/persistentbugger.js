// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(numbers) {
	let count = 0;
	// recurviveMultiple(numbers, count);

	// We return the count of multi persistence
	return recurviveMultiple.call(this, numbers, count);
}

function recurviveMultiple(numbers, count) {
	// We convert our number into an array of digits
	numbers = numbers.toString().split('').map(Number);
	// Init result
	let result = 1;
	// If only one digit we end our function
	if (numbers.length === 1) {
		return count;
	}
	for (let index = 0; index < numbers.length; index++) {
		const element = numbers[index];
		// On multiplie chaque chiffre par le suivant
		result *= element;
	}
	count ++;
	return recurviveMultiple(result, count);
}

persistence(999);

const assert = require('assert');

assert.equal(persistence(999),4);
assert.equal(persistence(39),3);
assert.equal(persistence(4),0);
assert.equal(persistence(25),2);

// [9,8,7]
//  0 1 2
// résultat d'avant multiplier par l'actuel élément