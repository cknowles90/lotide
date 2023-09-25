const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
 
  // for (let i = 0; i < arr1.length; i++) {
  // for (j = i; j <= i; j++) { 
        // for loop no longer needed;

      if (eqArrays(arr1, arr2)) { // if (arr1[i] !== arr2[j]) altered to call on eqArrays function;

        console.log(`🟢 Assertion Passed: ${arr1} === ${arr2}`)
        return true;
      } else {
        console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`)
        return false;
      }
    };



module.exports = assertArraysEqual;

