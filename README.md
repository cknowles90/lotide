# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me (Charlie Knowles) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cjknowles90/lotide`

**Require it:**

`const _ = require('@cjknowles90/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: A function that returns the first element of an array, takes on an array as it's parameter, and returns the element located at index [0] within the array.

* `middle(array)`: A function that returns the middle element/s of an array. It takes on an array as it's parameter, and returns a new array with the middle element/s from the original input array. If the array has an odd number in length, then it will return the single middle element. 
-- If the original input array has an even number in length, more than 2, then it will return the middle two elements. 
-- if the original array has 2 or fewer elements, it will return an empty array;

* `tail(array)`: A function that will return all elements of an input array, except for the element in the first index [0]. It takes an array as a parameter, and returns all array elements starting from index[1].

* `assertEqual(actual, expected)`: A function to assert if two object are of equal value. It takes in two values as it's parameters and logs a message indicating if they are equal or not.

* `eqArrays(array1, array2)`: A function used to check if two arrays are equal in length. It takes in two arrays as it's parameters and will return a Boolean value of True or False as per the comparison conditions - (element length & element order).

* `assertObjectsEqual(actual, expected)`: A function used to assert if two objects are equal in value. Taking on two objects as it's parameters and logging a message informing whether or not they are equal - (object length is one comparison condition).

* `countLetters(String)`: A function used to count the number of characters each word of an input string contains. It takes in a string as the parameter and outputs a numerical object pretaining to the character count of each input word of the sentence.

* `countOnly(allItems, itemsToCount)`: A function used to count the occurences of specified elements in an array based on the given object. It takes an array of 'allItems' and an object specifying which 'itemsToCount'.

* `assertArraysEqual(array1, array2)`: A function used to assert whether or not two arrays are equal. It takes two arrays in as it's parameters and logs a message indicating whether they are equal or not.

* `eqObjects(object1, object2)`: A function used to check if two objects are equal or not. It takes two objects as it's parameters and will return a Boolean value of True or False as per the comparison conditions - (keys & values).

* `findKey(object, callback)`: A function used to retrieve the key of a value in an object based on a callbacks specified function. It takes an object and a callback function as it's parameters. It will return the first key in the object, at which point the callback function will return a Truthy value, or undefined, if no such key is found. 

* `findKeyByValue(object, value)`: A function used to retrieve the key of a value in an object. It takes an object and a value as it's parameters. It will return the first key in the object that matches the specified value. It will return undefinied if no such key is found. 

* `map(array, callback)`: A function used to transform the elements of an array as specified by a callback funtion. It takes an array and a callback function as it's parameters and will return a new(updated) array containing the elements from the original array until the callback function finds a Truthy value, at which point it will exit the function and log the results up until the Truthy value was achieved.

* `takeUntil(array, callback)`: A function that will return a new array with elements from the original input array until the specified condition of the callback function is met. It takes an array and a callback as it's parameters. It will return a new array containing the elements up until the callback function returns a Truthy value. 

* `without(source, itemsToRemove)`: A function that returns a new array with specific elements removed. Using an array source, and an array of items to remove as its parameters. It will return a new array with the specified elements to remove, removed from the original source array. 