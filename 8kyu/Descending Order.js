// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221


function descendingOrder(n){
  //...
	return n;
}

descendingOrder(15);
descendingOrder(156);
descendingOrder(58793);


var assert = require('assert');  


assert.equal(descendingOrder(21445), 54421);
assert.equal(descendingOrder(145263), 654321);
assert.equal(descendingOrder(1254859723), 9875543221);

