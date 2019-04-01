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

// console.log(nthTriangle(1));
// console.log(nthTriangle(2));
// console.log(nthTriangle(3));
// console.log(nthTriangle(4));

//Sting Splitter
const stringSplitter = function(string, separator) {
  //base case
  if (string.length === 0) {
    return "";
  } else if (string[0] === separator) {
    return stringSplitter(string.slice(1), separator);
  } else {
    return string[0] + stringSplitter(string.slice(1), separator);
  }
};

// console.log(stringSplitter('Geordie/Ali/Ballers', '/'));
// console.log(stringSplitter('12:00 PM, April 1, 2019', ','));
const fibonacci = function(n) {
  //two bases, n = 1 is 1, n =2 is also 1
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// console.log(fibonacci(10));

const factorial = function(n) {
  //base case when n = 1
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// console.log(factorial(5));

//Anagrams

const anagrams = function(word) {
  const anagramList = [];
  if (word.length === 1) {
    anagramList.push(word[0]);
    return anagramList;
  }
  for (let i = 0; i < word.length; i++) {
    let prefix = word[i];
    let otherChars = word.substring(0, i) + word.substring(i + 1);
    let permutations = anagrams(otherChars);
    for (let j = 0; j < permutations.length; j++) {
      anagramList.push(prefix + permutations[j]);
    }
  }
  return anagramList;
};

// console.log(anagrams("east"));

const binaryRep = function(n) {
  if (n === 0) {
    return "0";
  }
  if (n === 1) {
    return "1";
  }
  if (n % 2 === 0) {
    return binaryRep(n / 2) + "0";
  } else {
    return binaryRep((n - 1) / 2) + "1";
  }
};

console.log(binaryRep(0));
console.log(binaryRep(1));
console.log(binaryRep(2));
console.log(binaryRep(3));
console.log(binaryRep(25));
