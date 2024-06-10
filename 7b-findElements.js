// Finding Stuff: find() and findIndex() (and includes()..)
//! find()
/*
(method) Array<{ name: string; }>.find<S>(predicate: (value: {
    name: string;
}, index: number, obj: {
    name: string;
}[]) => value is S, thisArg?: any): S | undefined (+1 overload)

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

@param predicate
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

@param thisArg
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
*/

const personData = [{ name: 'Skyy' }, { name: 'Soumadip' }];

const Soumadip = personData.find((person, idx, persons) => {
    return person.name === 'Soumadip';
});

console.log(Soumadip); // { name: 'Soumadip' }
// No copy - direct manipulation
Soumadip.name = 'Munna';
console.log(Soumadip, personData); //{ name: 'Munna' } [ { name: 'Skyy' }, { name: 'Munna' } ]

//! findIndex()
/*
(method) Array<{ name: string; }>.findIndex(predicate: (value: {
    name: string;
}, index: number, obj: {
    name: string;
}[]) => unknown, thisArg?: any): number

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

@param predicate
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

@param thisArg
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
*/

const skyyIdx = personData.findIndex((person, idx, persons) => {
    return person.name === 'Skyy';
});

console.log(skyyIdx); //0

//! includes()
/*
Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
*/

const randNums = [1, 33, 44, 2, -5, 9.3, 7.78, 33, 2];
console.log(randNums.includes(-5)); //true
console.log(randNums.indexOf(-5)!== -1); //true (same as above)
console.log(randNums.includes('bla')); //false