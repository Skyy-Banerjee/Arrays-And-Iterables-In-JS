//! Alternative to 'for' Loops: The forEach() method.

/*
! forEach() ->
!(method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19; //In Germany VAT is 19%
const taxAdjustedPrices = [];

prices.forEach((price, idx) => {
    const priceObj = { index: idx, originalPrice: price, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});

console.log('forLooped() prices=>',taxAdjustedPrices);

//! Transforming Data with map()

/*
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

const prices1 = [10.99, 5.99, 3.99, 6.59];
const tax1 = 0.19;

const taxAdjMappedPrices = prices.map((price, idx) => {
    const priceObj = { index: idx, originalPrice: price, taxAdjPrice: price * (1 + tax) };
    return priceObj;
})
console.log(`
Mapped prices =>`, taxAdjMappedPrices, `
 
Original Array => [${prices1}]`); //a copy created without mutating the original array.

