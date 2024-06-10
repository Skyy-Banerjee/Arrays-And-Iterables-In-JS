//Filtering Arrays with filter();
//! filter();
/*
! (method) Array<number>.filter<number>(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[] (+1 overload)

Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/

//! => functions come in handy

const prices = [10.99, 5.99, 3.99, 3.99, 6.59];
const filteredPrices = prices.filter(price => price > 6); //short n concise
console.log(filteredPrices);