const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const _ = require('lodash');

function head(theArray) {
    return _.head(theArray);

};


// console.log(head([777, 42]));


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([])); // should yield 'undefined'
assertEqual(head([77]), 77); // should still yield '77'

// assertEqual("Lighthouse Labs", 2);
// assertEqual(1, 2);