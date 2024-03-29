import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = (
  <div className="big">I AM A BIG DIV</div>
);
root.render(myDiv);

// self-clossing tags must have a / at the end

const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br/>
      I am a software developer.
      <br/>
      I specialize in creating React applications.
    </article>
  </div>
);

// Writting JS inside jsx elements

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>);

// detail the use of {} to define JS content inside jsx expressions

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const math = (
  <h1>
    2 + 3 = {2 + 3}  // this will output 2 + 3 = 5
  </h1>
);
root.render(math);


// accessing variables from jsx expressions

const name = 'Gerdo';

const greeting = <p>Hello, {name}!</p>;



// Using variables as attributes

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

// Using object properties as attributes

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);


// adding event listeners in jsx expressions

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy}/>  // note is onClick and not onclick
);

root.render(kitty);

