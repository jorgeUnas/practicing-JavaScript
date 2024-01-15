// property dot notation 

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;

console.log(crewCount);
console.log(planetArray);

// Braket notation 

let element = ['A', 'B', 'C'][0];

console.log(element);