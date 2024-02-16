import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); 


//Display facts

function displayFact(e){
  const animalName = e.target.alt;
  const factsArray = animals[animalName].facts
  const optionIndex = Math.floor(Math.random() * factsArray.length);
  const fact = factsArray[optionIndex];
  console.log(fact);
  document.getElementById('fact').innerHTML = fact;
}

const title = '';

const background = (<img className="background" alt="ocean" src="/images/ocean.jpg"/>);

//Displaying the animals with an image array
const images = [];

for(let animal in animals){
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact}/>);
}
//console.log(images);

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>
);
root.render(animalFacts);