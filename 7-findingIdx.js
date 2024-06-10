//! Retrieving Indexes with indexOf() / & lastIndexOf()
/*
! (method) Array<number>.indexOf(searchElement: number, fromIndex?: number): number
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/
const randNums = [1, 33, 44, 2, -5, 9.3, 7.78, 33, 2];

console.log(randNums.indexOf(33)); //1
console.log(randNums.indexOf(33, 2)); //7

/*
! (method) Array<number>.lastIndexOf(searchElement: number, fromIndex?: number): number
Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
*/

console.log(randNums.lastIndexOf(2)); //8

const personData = [{name:'Skyy'}, {name:'Soumadip'}];
console.log(personData.indexOf({name:'Skyy'})); //-1, because {} are reference types

