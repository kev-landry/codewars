// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221


// On veut parcourir tous les chiffres
// Pour chaque chiffre le trier
// Le plus grand chiffre va en premier puis le second plus grand puis...


function descendingOrder(number){
	if (number < 0) {
		return;
	}
  // Make our number argumen a string
	number = '' + number;
	// We split each digits into an array
	number = number.split('');
	// we sort digits
	number.sort(compare);
	// Now our array is sorted we converts it into a number
	let result = parseInt(number.join(''));
	return result;
}

// Compare if first digit is superior to the next one
function compare(a, b) {
	return b - a;
}

const assert = require('assert');

assert.equal(descendingOrder(21445), 54421);
assert.equal(descendingOrder(145263), 654321);
assert.equal(descendingOrder(1254859723), 9875543221);

