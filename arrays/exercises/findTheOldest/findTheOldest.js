const findTheOldest = function(arr) {
  for (let elem of arr){
      if(elem.yearOfDeath == undefined){
         let date = new Date;
         elem.yearOfDeath = date.getFullYear();
      }
  }
  
  let max = arr.map(person => (person.yearOfDeath - person.yearOfBirth)).sort((a,b) => b-a)[0];
  
  return arr.filter(person => (person.yearOfDeath - person.yearOfBirth) == max)[0].name;
  
  
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    
const people2 = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    
const people3 = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    
console.log(findTheOldest(people));
console.log(findTheOldest(people2));
console.log(findTheOldest(people3));

// Do not edit below this line
module.exports = findTheOldest;