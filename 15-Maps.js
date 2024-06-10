// Working with Maps

const person1 = { name: 'Skyy' };
const person2 = { name: 'Max' };

//! get() =>
/*
Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

@returns — Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
*/

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
console.log(personData); //Map(1) { { name: 'Skyy' } => [ { date: 'yesterday', price: 10 } ] }
console.log(personData.get(person1)); //[ { date: 'yesterday', price: 10 } ]

//! set() =>
/*
Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
*/
personData.set(person2, [{ date: '2 weeks ago', price: 100 }]);
console.log(personData);

//Getting the infos

for (const [key, val] of personData.entries()) {
    console.log(key, val);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const val of personData.values()) {
    console.log(val);
}

//console.log(personData.delete());
console.log(personData.size); //2



