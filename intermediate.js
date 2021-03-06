
//=============================================================
// Intermediate Algorithm Scripting: Spinal Tap Case (from FCC)
//=============================================================

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// IMPORTANT: Regex
// About the solution: I really like this way, it´s simple and effective.

function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/(?:_| )+/).join("-");
  
  return newStr;
}

spinalCase('This Is Spinal Tap');

//=======================================================
// Intermediate Algorithm Scripting: Pig Latin (from FCC)
//=======================================================

// You need to create a program that will translate from English to Pig Latin. 
// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an “ay”. If a word begins with a vowel 
// you just add “way” to the end. It might not be obvious but you need to remove all the 
// consonants up to the first vowel in case the word does not start with a vowel.

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");

//==============================================
// Intermediate from CoderByte: Tree Constructor
//==============================================

function TreeConstructor(strArr) { 
// 1. parents have at most 2 children; parents = { parent: [child1, child2]}
// 2. each child has at most parent; children = { child: parent }
// 3. Iterate across strArr and check all conditions remain true

  // code goes here
  let parents = {};
  let children = {};

  for (let i = 0; i < strArr.length; i++){
    // "(1,2)" => ["1", "2"]
    let pair = strArr[i].replace(/[()]/g, "").split(",");
    let child  = pair[0];
    let parent = pair[1];

    if(parents[parent]){
      parents[parent].push(child)
    } else {
      parents[parent] = [child]
    }

    if(parents[parent].length > 2) {
      return false;
    }

    if(children[child]){
      return false;
    } else {
      children[child] = parent;
    }
  }
  
  return true; 

}
   
// keep this function call here 
console.log(TreeConstructor(readline()));

//================================================================
// Intermediate Algorithm Scripting: Search and Replace (from FCC)
//================================================================

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//=========================================================
// Intermediate Algorithm Scripting: DNA Pairing (from FCC)
//=========================================================

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

//=============================================================
// Intermediate Algorithm Scripting: Missing letters (from FCC)
//=============================================================

// You will create a program that will find the missing letter from a string and return it. 
// If there is no missing letter, the program should return undefined. There is currently no test case 
// for the string missing more than one letter, but if there was one, recursion would be used. Also, the 
// letters are always provided in order so there is no need to sort them.

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

//==========================================================
// Intermediate Algorithm Scripting: Sorted Union (from FCC)
//==========================================================

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

function uniteUnique(...arr) {
  let newArr = [];
  // the arguments are arrays, take all the arguments
  for (let i = 0; i < arr.length; i++){
    newArr = newArr.concat(arr[i])
  };
  // filter the array to remove duplicates
  let uniqueArr = newArr.filter(function(item, pos){
    return newArr.indexOf(item) == pos;
  });

  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



//===================================================================
// Intermediate Algorithm Scripting: Convert HTML Entities (from FCC)
//===================================================================

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");



//===========================================================================
// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers (from FCC)
//===========================================================================

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);

//============================================================
// Intermediate Algorithm Scripting: Sum All Primes (from FCC)
//============================================================

// PS.: Sieve of Eratosthenes code from Ted Hopp (stackoverflow)

function sumPrimes(num) {
  let sum;

  // find all the prime numbers: 2 divisors only 1 and itself
  function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
  }

  let primesArr = getPrimes(num);
  
  // sum all primes
  sum = primesArr.reduce((a, b) => a+b);
    
  return sum;
}

sumPrimes(10);



//======================================================================
// Intermediate Algorithm Scripting: Smallest Common Multiple (from FCC)
//======================================================================

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);

//=====================================================
// Intermediate Algorithm Scripting: Drop it (from FCC)
//=====================================================

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});


//=========================================================
// Intermediate Algorithm Scripting: Steamroller (from FCC)
//=========================================================

// recursion

function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
steamrollArray([1, [2], [3, [[4]]]]);

//================================================================
// Intermediate Algorithm Scripting: Arguments Optional (from FCC)
//================================================================

/* It can be quite complicated to understand what needs to be done. There are always many ways to do something 
   when coding but regardless of the algorithm used, we have to create a program that does the following:

 - It has to add two numbers passed as parameters and return the sum.
 - It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
 - It has to check if it has one or two arguments passed. More are ignored.
 - If it has only one argument then it has to return a function that uses that number and expects another one, to then add it. */

function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
// test here
addTogether(2, 3);
