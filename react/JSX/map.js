import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) => <li>{person}</li>  // This generates an array of <li> jsx elements
);
// root.render goes here:
root.render(<ul>{peopleList}</ul>);