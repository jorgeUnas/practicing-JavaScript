import resources from '../modules/animated-text.js';
const {changeText, changeToFunkyColor} = resources;

const header = document.getElementById("header");
changeText(header, "I did it!");
// call changeText here

setInterval(()=> {
  
  // call changeToFunkyColor() here
changeToFunkyColor(header);
}, 200);