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


const takeUntil = (array, callback) => {

    let end = array.findIndex(callback); // uses .findIndex to find the index where the callback function returns truthy
    return array.slice(0, end) // uses .slice to create a slice of the array up to (not including) that index
  }
  
  // const result = [];
  
  // for (const item of array) {
  //   if (!callback(item)) { // checking if the callback returns a falsy value
  //     result.push(item);  // if falsy, pushes the item into the empty result array
  //   } else {
  //     break; // if callback finds a truthy value it breaks from the loop
  //   }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

/* 

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/