/*
Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
Notes
Try to solve this challenge without using strings!
*/

//Solution

const num_of_digits = num =>
  Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;

const num_of_digits2nd = num => num.toString().match(/\d/g).length;
