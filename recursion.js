"use strict";

// Counting Sheep Drill

const countingSheep = function(n) {
  //base case
  if (n === 0) {
    return "All sheep jumped over the fence";
  } else {
    return (
      `${n}: Another sheep jumps over the fence` + "\n" + countingSheep(n - 1)
    );
  }
};

// console.log(countingSheep(3));

//Power Calculator Drill
const powerCalculator = function(base, exp) {
  //base case
  if (exp === 0) {
    return 1;
  }
  //if exp is negative
  else if (exp < 0) {
    return "exponent should be >= 0";
  }
  //while exp is positive
  else {
    return base * powerCalculator(base, exp - 1);
  }
};

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(10, -2));
// console.log(powerCalculator(2, 4));

//Reverse String

const reverseString = function(string) {
  if (string.length === 0) {
    return "";
  } else {
    return (
      string[string.length - 1] +
      reverseString(string.slice(0, string.length - 1))
    );
  }
};

// console.log(reverseString("sdrawkcab"));

const nthTriangle = function(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + nthTriangle(n - 1);
  }
};

console.log(nthTriangle(1));
console.log(nthTriangle(2));
console.log(nthTriangle(3));
console.log(nthTriangle(4));
