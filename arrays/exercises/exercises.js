// 1 exercise: Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased

 //mi solution 

/*
function camelize(str){
    let camelStr = str.split('-');
    camelStr = camelStr.map(item  => item[0].toLocaleUpperCase()+item.slice(1));
    camelStr = camelStr.join('');
    camelStr = camelStr[0].toLowerCase() + camelStr.substr(1);
    return camelStr;
}
*/

// more compact solution

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

/* 2 exercise: Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and
return a result as an array. */


let arr = [5, 3, 8, 1, 14, 25, 38, 54, 70];

let filtered = filterRange(arr, 7, 40);  // expected: 8, 14, 25, 38 (matching values)

console.log(filtered);
console.log(arr); // original array not modified

function filterRange(arr, minimum, maximum){
    let arrayRange = arr.filter(number => number >= minimum && number < maximum);
    return arrayRange;
}

// Exercise 3: Filter range "in place"

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1] Array was modified 

function filterRangeInPlace(arr, a, b){
    
 //arr.map(item => (a <= item && item <= b)? item : 0);
 

 for(let i = 0; i < arr.length; i++){
     let val = arr[i];
   if(val<a || val>b){
     arr.splice(i, 1);
     i--;
   }
 }

}

// Exercise 4: Sort in decreasing order

arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b-a)

console.log( arr ); // 8, 5, 2, 1, -10

// Exercise 5: Copy and sort array

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

// create the function here 
function copySorted(arr){
    let arr2 = arr.slice();
    arr2.sort();
    return arr2;
    
    // return arr.slice().sort();
}

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

// Extendable calculator

function Calculator(){
    
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    // implement a method to sum and substract
    this.calculate = function(str){
        let arr = str.split(' '),
        a = +arr[0],
        op = arr[1],
        b = +arr[2];
        
        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        
        return this.methods[op](a, b);
    // implement a method to teach the calculator a new operation
    
        
    }
    
}

let calc = new Calculator;
console.log( calc.calculate("8 + 7") ); // 10

/*
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
*/