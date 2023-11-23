//const main = document.querySelector('main');
const show = document.querySelector('#show');


// As arrys are objects, I can use delete

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3


// Splice()

arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]

 // Splice() to remove and replace
 
arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"]


// What is returned by splice? 

arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements


// Splice() to insert elements without delete others

arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"


// negative numbers are allowed

arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log( arr ); // 1,2,3,4,5

// Slice method 

arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

// slice to create a copy of the array

console.log( arr.slice() ) // return arr 

// CONCAT
arr = [1, 2];

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Iterate: forEach

["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//SEARCHING IN ARRAY

arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

console.log( arr.includes(1) ); // true

// difference between indexOf and lastIndexOf

let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// working with NaN 
arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( arr.includes(NaN) );// true (correct)

// FIND AND FILTER

// find 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

// findIndex() and findLastIndex()

users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3

// filter()

users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

//TRANSFORM AN ARRAY
//map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); 

// sort(fn)

arr = [ 1, 2, 15, 1654 ];

// the method reorders the content of arr
arr.sort();

console.log( arr );  // 1, 15, 2

// it's not sorted, because is treted as an array of string. Use:

arr.sort( (a, b) => a - b );
console.log( arr );

// reverse

arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log( arr ); // 5,4,3,2,1

// SPLIT AND JOIN

//split 

let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// split into letters

let str = "test";

console.log( str.split('') ); // t,e,s,t

// join()

arr = ['Bilbo', 'Gandalf', 'Nazgul'];

str = arr.join(';'); // glue the array into a string using ;

console.log( str ); // Bilbo;Gandalf;Nazgul


// REDUCE

arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

//Array.isArray

//typeof does not differentiate arrays from other objects

console.log(typeof {}); // object
console.log(typeof []); // object (same)

// use Array.isArray

console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true

