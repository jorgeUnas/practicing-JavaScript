import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); 


const title = '';

const background = (<img className="background" alt="ocean" src="/images/ocean.jpg"/>);

//Displaying the animals with an image array
const images = [];

for(let animal in animals){
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button"/>);
}
//console.log(images);

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className="animals">
    {images}
    </div>
  </div>
);
root.render(animalFacts);