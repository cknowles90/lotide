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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["i", "believe", "i", "can", "fly"];
const words3 = ["hello", "is", "it", "me", "you", "are", "looking", "for"];


const map = function(array, callback) { // map function will take in two arguments
  const results = [];                   // 1 - an array to map // 2 - a callback function
  for (let item of array) { 
    results.push(callback(item));
                                        // the map function will return a new array based on the results of the callback function
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length)
console.log(results2)

const results3 = map(words2, word => word[0]);
console.log(results3);

const results4 = map(words2, word => word.length)
console.log(results4);

const results5 = map(words3, word => word[0]);
console.log(results5);

const results6 = map(words3, word => word.length)
console.log(results6);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["i", "b", "i", "c", "f"]);
assertArraysEqual(results4, [1, 7, 1, 3, 3]);
assertArraysEqual(results5, ["h", "i", "i", "m", "y", "a", "l", "f"]);
assertArraysEqual(results6, [5, 2, 2, 2, 3, 3, 7, 3])


// console.log(map);


// console.log("item BEFORE: ", item);
// console.log("item AFTER: ", callback(item));

// console.log("---");

// console.log('array: ', array);
// console.log('callback: ', callback);
    

