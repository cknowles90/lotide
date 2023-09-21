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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) { // Check if they have the same number of keys
    return false;

  }

  for (const key of keys1) { // Check through the keys of the first object

  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // Check if the properties of the objects are arrays
    
    if (!eqArrays(object1[key], object2[key])) { // If they are arrays, call the function eqArray to compare them
    }
  }else { 
    
    if (object1[key] !== object2[key]) {  // If properties are not arrays, check if The value for each key in one object is the same 
      return false;                      // as the value for that same key in the other object using strict equality (===) -
    }                                   // - assumes they are primitives
  }
}
  return true; // Return true if all keys and values match/are the same
};




const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
