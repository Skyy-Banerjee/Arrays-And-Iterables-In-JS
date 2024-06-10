//! 1- creating arrays[]
const numbers = [1,2,3,4];
const moreNumbers = new Array();
const strArrays = new Array('Hello','World!');
const numbersArrays = new Array(3,5);
const numArraysStrange = new Array(5); //Strange behavior
const numArraysStrange1 = Array(6); //same behavior as above
const numbersArrays1 = Array(1,2,3,4,5,6,7,8);
//special methods
const yetMoreNumbers = Array.of(33,44,55);

/*
.of() => Returns a new array from a set of elements.
@param items — A set of elements to include in the new array object.
*/

const listItems = document.querySelectorAll('li'); //🍕
const anotherMethod = Array.from('Skyy Banerjee');
const arrayListItems  = Array.from(listItems);

/*
.from() => Creates an array from an array-like object.
@param arrayLike — An array-like object to convert to an array.

Helpful when converting ARRAY like objects (iterables). Ex- strings, nodeLists, etc.
*/

// [] = better for performance than of()

console.log(numbers);
console.log(moreNumbers);
console.log(strArrays);
console.log(numbersArrays);
console.log(numArraysStrange);
console.log(numArraysStrange1);
console.log(numbersArrays1);
console.log(anotherMethod);
console.log(arrayListItems);