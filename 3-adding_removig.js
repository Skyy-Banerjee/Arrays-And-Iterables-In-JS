//push(),pop(),unshift(),shift()
//Adding And Removing Elements

const hobbies = ['sports', 'Cooking'];

//! First Adding
hobbies.push('Reading'); //adds to the end
console.log(hobbies);
hobbies.unshift('coding'); //adds to the beginning
console.log(hobbies);

//! Now removing
hobbies.pop(); //removes from the end
console.log(hobbies);
hobbies.shift(); //removes from the beginning
console.log(hobbies);

//! push()/pop() are much faster
hobbies[1] = 'walking';
console.log(hobbies);