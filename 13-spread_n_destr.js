//! The Spread Operator(...)
const names = ['Skyy', 'Banerjee', 'Akash', 'Soumadip'];
const copiedNames = [...names];
names.push('Herr_Banerjee')
console.log(copiedNames, names);

const people = [{ name: 'Max', age: 34 }, { name: 'Manuel', age: 35 }, { name: 'Skyy', age: 28 }];
const copiedPeople = [...people];
console.log(people, copiedPeople);
people.push({ name: 'Jonas', age: 30 });
people[0].age = 108;
console.log('Original => ', people, 'Copy =>', copiedPeople);

//copying everything
const solidCopy = [...people.map(person => ({ name: person.name, age: person.age }))]; //new array

//! Also array destructuring []
const nameData = ['Skyy', 'Banerjee'];
const batManData = ['Bruce', 'Wayne', 'Batman', 35, 'Gotham City', '🦇'];
const [firstName, lastName] = nameData;
const [first, last, ...restInfo] = batManData
console.log(firstName, lastName);
console.log(first, last);
console.log(restInfo);