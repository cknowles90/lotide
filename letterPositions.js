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
}

const letterPositions = function(sentence) {
  const results = {};

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === " ") {
        continue; 
        } else if (results[sentence[i]]) {
          results[sentence[i]].push(i);
        } else {
          results[sentence[i]] = [i];
        }
      }
      return results;
    }


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("this is a test").h, [4]);
assertArraysEqual(letterPositions("this is a test").i, [2, 5]);
