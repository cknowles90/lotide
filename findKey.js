const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key in object) {     // loop through the keys of the input object (for...in loop)
    if (callback(object[key])) {  // check if the callback function returns a truthy value for the current object[key]
      return key;                 // if the callback returns true, return the current key as the result
    }
  }
  return undefined;               // if not keys return true, return undefined
} 

const foundKey = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // call findKey function with a callback that checks for foundKey with stars === 2


// EXPECTED OUTPUT => "noma" 

assertEqual(foundKey, "noma");

