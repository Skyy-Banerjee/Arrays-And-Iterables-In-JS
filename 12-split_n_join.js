//Arrays & Strings - split() & join()

//! split()
/*
! (method) String.split(separator: string | RegExp, limit?: number): string[] (+1 overload)

Split a string into substrings using the specified separator and return them as an array.

@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

@param limit — A value used to limit the number of elements returned in the array.
*/

const csvData = 'berlin;10.99;2024';

const transformedData = csvData.split('',);
const transformedData1 = csvData.split(';');
console.log(transformedData);
console.log(transformedData1);

//! join()
/*
!(method) Array<string>.join(separator?: string): string

Adds all the elements of an array into a string, separated by the specified separator string.

@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
*/
const joined = transformedData.join('');
console.log(joined);
