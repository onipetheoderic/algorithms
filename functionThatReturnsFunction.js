/*
Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
*/
//Solution
function redundant(str) {
  return () => str;
}
//OR
const redundant2nd = str => () => str;
//OR
redundant = s => _ => s; /*
_ is a valid variable identifier in JavaScript, and could theoretically refer to anything. 
Using _(...) with function syntax implies that _ is a function.
*/
