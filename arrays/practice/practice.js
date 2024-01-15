let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Indexes

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[2]);

console.log(famousSayings[3]);

// Updating elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// Lenght property 

console.log(groceryList.length);

// push()

groceryList.push('lettuce', 'nuts');  // permanently modified
console.log(groceryList);  // [ 'bread', 'avocados', 'milk', 'lettuce', 'nuts' ]

// pop()

groceryList.pop();
console.log(groceryList); // [ 'bread', 'avocados', 'milk', 'lettuce' ]

// Other methods

groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// Functions mutate arrays

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => {
  newArr.pop()
}

removeElement(concept);

console.log(concept);  

// Nested array

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(target);