/* Sets N Maps-
! 3 Major Types Of Iterables in JS
 1. Arays (most common)
 2. Sets
 3. Maps
*/

//! Sets - no duplicates allowed
const ids = new Set([1,2,3,3,2]);
console.log(ids); //Set(3) { 1, 2, 3 }
console.log(ids.has(1)); //true
console.log(ids.has(11)); //false
console.log(ids.entries()); //[Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(ids.delete(1)); //true

for(const entry of ids.entries()) {
    console.log(entry[0]); // 2,3
}