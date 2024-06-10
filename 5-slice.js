//Selecting Ranges And Creating Copies With Slice()
//! Slice() - Array Method()
//! Arrays are reference types
/*
! slice(start?: number, end?: number): number[]
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/

const randNums = [1, 33, 44, 2, -5, 9.3, 7.78,];
//console.log(randNums.slice()); //! copy

const storedNums = randNums.slice();
randNums.push(69);
console.log(randNums, storedNums); //only affects 'randNums'
// [1,  33,   44,  2,-5, 9.3, 7.78, 69] [1, 33,  44,2, -5, 9.3, 7.78]

//! Selecting part(range) of an array
const partRandNums = randNums.slice(1, 4);
console.log(partRandNums, randNums);
// [ 33, 44, 2 ] [1,  33,   44,  2, -5, 9.3, 7.78, 69]

//! (-ve) indices
const negativeIdx = randNums.slice(-4, -1);
console.log(negativeIdx); //[ -5, 9.3, 7.78 ]

//! 1 argument
const singleArg = randNums.slice(2);
console.log(singleArg); //[ 44, 2, -5, 9.3, 7.78, 69 ]


