// Understanding WeakSets And WeakMaps
// WeakSet - Garbage Collection
// Memory efficiency in larger Applications

// WeakSet
let person = { name: 'John' };
const people = new WeakSet();
people.add(person);

console.log(people);
//person = null;
console.log(people);

// WeakMap
const personData = new WeakMap(person);
personData.set(person, 'Extra Info!');
person = null;

