// sort()ing And reverse()ing an Array[]

//! sort()
/*
(method) Array<number>.sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]

Sorts an array in place. This method mutates the array and returns a reference to the same array.

@param compareFn
Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)
*/
const prices = [10.99, 5.99, 3.99, 3.99, 6.59];
const tax = 0.19; //In Germany VAT is 19%
const taxAdjMappedPrices = prices.map((price, idx) => {
    const priceObj = { index: idx, originalPrice: price, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});

const naiveSorting = prices.sort();
//Improper, as no.s are initially converted to 'str' before sorting
console.log('Naive Sorting =>', naiveSorting);

const properSorting = prices.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
})
console.log('Proper Sorting =>', properSorting);

//! reverse()
/*
(method) Array<number>.reverse(): number[]
Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/
console.log('Reversed =>', properSorting.reverse());