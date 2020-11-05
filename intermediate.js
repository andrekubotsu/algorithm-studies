
// Intermediate Algorithm Scripting: Spinal Tap Case (from FCC)
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// IMPORTANT: Regex

function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/(?:_| )+/).join("-");
  
  return newStr;
}

spinalCase('This Is Spinal Tap');