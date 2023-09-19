const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("🟢 Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🔴 Assertion Failed: " + actual + " !== " + expected);
  }
};



assertEqual("Lighthouse Labs", 2);
assertEqual(1, 2);