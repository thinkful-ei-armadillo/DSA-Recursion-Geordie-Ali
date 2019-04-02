'use strict';

// Counting Sheep Drill

const countingSheep = function(n) {
  //base case
  if (n === 0) {
    return 'All sheep jumped over the fence';
  } else {
    return (
      `${n}: Another sheep jumps over the fence` + '\n' + countingSheep(n - 1)
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
    return 'exponent should be >= 0';
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
    return '';
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
    return '';
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

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


const mazeRunner = function(maze, position=0, x = 0, y = 0, direction='S', path = []){
  if(y<0 || x < 0){
    return;
  }
  if(y>=maze[0].length || x>=maze.length){
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === 'e'){
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === ' ') {
    // The current cell is free. Mark it as visited
    maze[x][y] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunner(maze,position,x, y - 1, 'L',path); // left
    mazeRunner(maze,position,x - 1, y, 'U',path); // up
    mazeRunner(maze,position,x, y + 1, 'R',path); // right
    mazeRunner(maze,position,x + 1, y, 'D',path); // down
  }
  // Remove the last direction from the path
  position--;

};
const PrintPath = function (path, startPos, endPos){
  console.log('Found path to the exit: ');
  console.log(path);
};

// console.log(mazeRunner(maze), maze);

const mazeRunnerAll = function(maze, position=0, x = 0, y = 0, direction='S', path = []){
  if(y<0 || x < 0){
    return;
  }
  if(y>=maze[0].length || x>=maze.length){
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === 'e'){
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === ' ') {
    // The current cell is free. Mark it as visited
    maze[x][y] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunnerAll(maze,position,x, y - 1, 'L',path); // left
    mazeRunnerAll(maze,position,x - 1, y, 'U',path); // up
    mazeRunnerAll(maze,position,x, y + 1, 'R',path); // right
    mazeRunnerAll(maze,position,x + 1, y, 'D',path); // down
    //remarks current position as unvisited so we can check back for all exits
    maze[x][y] = ' ';
  }
  // Remove the last direction from the path
  position--;

};

// console.log(mazeRunnerAll(maze));

const binaryRep = function(n) {
  if (n === 0) {
    return '0';
  }
  if (n === 1) {
    return '1';
  }
  if (n % 2 === 0) {
    return binaryRep(n / 2) + '0';
  } else {
    return binaryRep((n - 1) / 2) + '1';
  }
};

// console.log(binaryRep(0));
// console.log(binaryRep(1));
// console.log(binaryRep(2));
// console.log(binaryRep(3));
// console.log(binaryRep(25));

const facebook =
  {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: {},
          Kyle: {},
          Andra: {}
        },
        Zhao: {
          Richie: {},
          Sofia: {}
        }
      },
      Schrage: {
        VanDyck: {
          Sabrina: {},
          Michelle: {},
          Josh: {}
        },
        Swain: {
          Blanch: {},
          Tom: {},
          Joe: {}
        }
      },
      Sandberg: {
        Goler: {
          Eddie: {},
          Julie: {},
          Annie: {}
        },
        Hernandez: {
          Rowi: {},
          Inga: {},
          Morgan: {}
        },
        Moissinac: {
          Amy: {},
          Chuck: {},
          Vinni: {}
        },
        Kelley: {
          Eric: {},
          Ana: {},
          Wes: {}
        }
      }
    }
  };

const orgChart = function(org, indent = 0) {
  for (var key in org) {
    console.log(' '.repeat(indent), key);
    orgChart(org[key], indent + 4);
  }
};

console.log(orgChart(facebook));
