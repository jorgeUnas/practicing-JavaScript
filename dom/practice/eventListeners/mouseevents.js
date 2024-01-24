// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width = '501px';
}
function changeBackground(){
  itemTwo.style.backgroundColor = 'blue';
}
function changeText(){
  itemThree.innerHTML = 'The mouse has left the element';
}
function showItem(){
  itemFive.style.display = 'block';
}
itemOne.addEventListener('mouseover', increaseWidth);
itemTwo.addEventListener('mouseup', changeBackground);
itemThree.addEventListener('mouseout', changeText);
itemFour.addEventListener('mousedown', showItem);