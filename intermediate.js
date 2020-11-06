
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

//==================================
// Intermediate Pig Latin (from FCC)
//==================================

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
