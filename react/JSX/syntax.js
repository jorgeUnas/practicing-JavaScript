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