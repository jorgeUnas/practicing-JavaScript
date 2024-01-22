/*Write a function groceries() that takes an array of object literals of grocery items.
The function should return a string with each item separated by a comma except the last 
two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'*/


const groceries = arr => {
  let newArr = arr.map(elem => elem.item);
  let otherArr = [];
  let str = ''
  for(let i = 0; i < newArr.length; i++){
    if(i == newArr.length - 1 && newArr.length != 1){
      otherArr.push('and');
      otherArr.push(newArr[i]);
    }else if (i == newArr.length - 2 || newArr.length == 1){
    otherArr.push(newArr[i]);
    }else{
      otherArr.push(newArr[i] + ',')
    }
  }
  str = otherArr.join(' ')
  return str;
}

console.log(
  groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] )
)
console.log(
  groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
)
console.log(
  groceries([{item: 'Ice Cream'}])
)