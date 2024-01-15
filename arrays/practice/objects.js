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

// Bracket notation 

let element = ['A', 'B', 'C'][0];

console.log(element);


spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
console.log(
    spaceship['Active Duty']  // Returns true
)

// is useful in functions

let returnAnyProp = (objectName, propName) => objectName[propName];
 
console.log(
    returnAnyProp(spaceship, 'homePlanet') // Returns 'Earth'
)

// Property assignment 

spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};


spaceship.color = 'glorious gold';  // Re-assignment

spaceship.numEngines = 9;  // new property

delete spaceship['Secret Mission'];

console.log(spaceship);