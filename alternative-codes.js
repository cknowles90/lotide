
// ############ countLetters - W1D3 - ##############

// const countLetters = function(string) {
//   const countedLetters = {};
    // for (let char of string) {
    //   if (char === " " || char === ",") {
    //     continue;
    //   } 
      // else if (string.replace(/[\s,]/ig, "")) {
      //     string.toLowerCase();
      // } else if (countedLetters[str]) {
      //   countedLetters[str] += 1;
      // } else {
      //   countedLetters[str] = 1;
      // }

// ############ - code OG - complicated AF though ###################

// const countLetters = function(string) {
  
//   const countedLetters = {};
//   const spaceFreeString = string.replace(/[\s,]/ig, "");
  
//   for (let i = 0; i < spaceFreeString.length; i++) {
//     const letters = spaceFreeString[i];
    
//     if (countedLetters[letters]) {
//       if (letters === letters.toLowerCase()) {
//           countedLetters[letters.toLowerCase()]++;
//       } else {
//           countedLetters[letters]++;
//         }
//     } else {
//       if (letters === letters.toLowerCase()) {
//             countedLetters[letters.toLowerCase()] = 1;
//         } else {
//             countedLetters[letters] = 1;
//         }    
//       } 
//     }
                
//       for (const letter in countedLetters) {
//         console.log(`${letter}: ${countedLetters[letter]}`)
//       }
//     };

//     countedLetters("lighthouse, AKA, LHL, is in the house");

// ##########################################




// ##### middle.js - W1D3 - ##### //

// const middle = function(array) {
//   const newArray = [];
//   const lengthOfArray = array.length;

//   if (lengthOfArray <= 2) {
//     return newArray;
//   } else if (lengthOfArray % 2 === 1) {
    
//     const middleArray = Math.floor(lengthOfArray / 2);
//     newArray.push(array[middleArray]);
//   } else {

//     const middleArray1 = lengthOfArray / 2 - 1;
//     const middleArray2 = lengthOfArray / 2;
//     newArray.push(array[middleArray1], array[middleArray2]);
//   }

//   return newArray;
// };

// ######################################

