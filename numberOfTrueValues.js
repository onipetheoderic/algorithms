/*
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/
//Solution

const countTrue = arr => arr.filter(x => x === true).length;
//OR
const countTrue2nd = r => r.filter(Boolean).length;
//OR
const countTrue3rd = arr => arr.reduce((p, v) => p + v, 0);

console.log(countTrue([true, false, true, false, true]));
console.log(countTrue2nd([true, false, true, false, true]));
console.log(countTrue3rd([true, false, true, false, true]));
