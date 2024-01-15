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