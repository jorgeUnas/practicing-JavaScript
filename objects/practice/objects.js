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

// Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

// For .. in loop


spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 


for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

 // this 
 
 let robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return  `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo());


// Arrow functions and this in methods

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined avoid using this notation in methods.


// Getters ==> getter methods do not need to be called with a set of parentheses.

robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel == 'number'){
      return `My current energy level is ${this._energyLevel}`;
    }else{
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);

// setters 

robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof this._numOfSensors == 'number' && num >= 0){
      this._numOfSensors = num;
    }else{
      return 'Pass in a number that is greater than or equal to 0'
    }
  }
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

// Factory functions

let robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();


// Property Value Shorthand

robotFactory = (model, mobile) => {
  return {
    model,  // this is the shorthand
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}


// To check that the property value shorthand technique worked:
let newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


//Built-in methods

robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);