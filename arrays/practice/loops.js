// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);

// While loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

// Do .. While loop 

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);