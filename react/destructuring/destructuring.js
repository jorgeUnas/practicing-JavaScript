// destructuring an array 

let colors = ['blue','red','purple'];

// Destructure here
let [color1, color2, color3] = colors;

console.log(color1, color2, color3);

// destructuring an object 

let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

// Destructure here
let {x, y, z} = planets; 

console.log(x, y, z);

// Destructimg objects arguments 

let prairieRose = {
  name: 'Prairie Rose',
  scientificName: 'Rosa arkansana',
  kingdom:	'Plantae',
  genus:	'Rosa',
  use: 'ornamental'
};

const printPlantInfo = ({name,scientificName, kingdom}) => {
  console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`);
};

printPlantInfo(prairieRose);