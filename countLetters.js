const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const countedLetters = {};

  const cleanedString = string.replace(/[\s,]/ig, "");

  for (let char of cleanedString) {
    if (countedLetters[char]) {
      countedLetters[char] += 1;
    } else {
      countedLetters[char] = 1;
    }
  }

  for (const letter in countedLetters) {
    console.log(`${letter}: ${countedLetters[letter]}`);
  }
};

countLetters("lighthouse, AKA, LHL, is in the house");


                