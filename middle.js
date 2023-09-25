const middle = function(array) {
  const newArray = [];
  const lengthOfArray = array.length;

  if (lengthOfArray <= 2) {
    return newArray;
  }
  
  if (lengthOfArray % 2 === 1) {
    newArray.push(array[(lengthOfArray - 1) / 2]);
  } else {
    newArray.push(array[lengthOfArray / 2 -1], array[lengthOfArray / 2]);
  }

  return newArray;
};

module.exports = middle;


