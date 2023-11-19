const showFruitPrice = document.querySelector('#show');
const showName = document.querySelector('#showName');
const list = document.querySelector('#list');

let fruit = prompt('write the name of a fruit: ', 'apple');

/* let fruitPrice = {
    [fruit]: 5,
}
*/

// more simple 

let fruitPrice = {};

fruitPrice[fruit] = 5; 

showFruitPrice.innerHTML = `the price of 1 ${fruit} is ${fruitPrice[fruit]}£`;

// Other example:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);


showName.innerHTML = user.name; 

//there are no limitations on property names. They can be any strings or symbols

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
//alert( obj["0"] ); // test
//alert( obj[0] ); // test (same property)

// Property "in"

let user2 = { name: "John", 
              age: 30, 
              isAdmin: true };

//alert( "age" in user2 ); // true, user.age exists
//alert( "blabla" in user2 ); // false, user.blabla doesn't exist

// for in 

for (let key in user2){
    const item = document.createElement('li');
    item.innerHTML = `${key}: ${user2[key]}`;
    list.appendChild(item);
    
}

// Exercises:

let user3 = {};

user3["name"] = "Jorge";
user3["surname"] = "Unas";
user3["name"] = "Peter";
delete user3["name"];

// 2

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false


function isEmpty(obje){
    for (let key in obje){
        
            return false;
    }
    
    return true;
};

let obje = {};

console.log(isEmpty(obje));

//3 Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries){
  sum += salaries[key];
};

alert(sum);

//4 Multiply numeric property values by 2

function multiplyNumeric(obj){
  for (let key in obj){
    if (typeof obj[key] === "number"){
      obj[key] *= 2;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

