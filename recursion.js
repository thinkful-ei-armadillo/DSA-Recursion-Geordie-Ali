'use strict';

// Counting Sheep Drill

const countingSheep = function(n) {
  //base case
  if ( n === 0 ) {
    return 'All sheep jumped over the fence';
  }
  else {
    return `${n}: Another sheep jumps over the fence` + '\n' + countingSheep(n-1);
  }
};

// console.log(countingSheep(3));

//Power Calculator Drill
const powerCalculator = function(base, exp) {
  //base case
  if ( exp === 0 ) {
    return 1;
  }
  //if exp is negative
  else if ( exp < 0 ) {
    return 'exponent should be >= 0';
  }
  //while exp is positive
  else {
    return base * powerCalculator(base, exp-1);
  }
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));
console.log(powerCalculator(2, 4));