//! Splice() - Inserting between 2 elements - splice
//Array [] methods

/*
!Splice()- (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.
*/

const justiceLeague = ['BatMan', 'SuperMan', 'Flash', 'Wonder Woman', 'CatWoman'];

//insertion/replacement
justiceLeague.splice(1, 0, 'Green Lantern');
console.log(justiceLeague);

//deletion
justiceLeague.splice(0, 1);
console.log(justiceLeague);

//return type
const removedElements = justiceLeague.splice(0, 1);
console.log(`Removed Element=>`, removedElements);

//(-ve) indices
const negativeIdx = justiceLeague.splice(-1,1);
console.log(negativeIdx);
console.log(justiceLeague);
