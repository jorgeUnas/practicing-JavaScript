// Write your code here:
const greetAliens = arr => {
    let greeting = '';
  for(let i of arr){
    greeting += `Oh powerful ${i}, we humans offer our unconditional surrender! \n`;
  }
  return greeting;
}

/*
const greetAliens = arr => {
    let greeting = '';
  for(let i = 0; i < arr.length; i++){
    greeting += `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`;
  }
  return greeting;
}
*/
// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

console.log(greetAliens(aliens));