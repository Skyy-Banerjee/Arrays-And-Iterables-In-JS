//Adding Arrays to Arrays using concat()
/*
! (method) Array<number>.concat(...items: ConcatArray<number>[]): number[] (+1 overload)

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array.
*/

const randNums = [1, 33, 44, 2, -5, 9.3, 7.78,];
const storedNums = randNums.concat([100, 101, 102], [103.33, 104.99, -105.99]);
console.log(storedNums);

/*
[
        1,     33,     44,
        2,     -5,    9.3,
     7.78,    100,    101,
      102, 103.33, 104.99,
  -105.99
]
*/