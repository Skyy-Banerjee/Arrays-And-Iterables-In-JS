//The important reduce() method

/*
(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
*/

const prices = [10.99, 5.99, 3.99, 3.99, 6.59];
const sum = prices.reduce((prev, curr) => prev + curr, 0)
console.log(sum); //31.55

//Chaining methods (map() + reduce()):

const items = [{ item: 'a', price: 10.55 }, { item: 'b', price: 5.99 }, { item: 'c', price: 6.22 }, { item: 'd', price: 99 }];

const totalPrice = items.map(i => i.price).reduce((sum, item) => sum + item,0);
console.log(totalPrice); //121.75999999999999