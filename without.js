const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (j = i; j <= i; j++) {
      if (arr1[i] !== arr2[j]) {
        return console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`)
      }
    }
  }

 return console.log(`🟢 Assertion Passed: ${arr1} === ${arr2}`)
};

const without = function(arr1, arr2) {
  let finalArray = [];
  
  for (const arr of arr1) {
    if (!arr2.includes(arr)) {
      finalArray.push(arr);
    }
  }

  return finalArray;
};

const words = ["hello", "world", "this", "is", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
