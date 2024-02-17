import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './App';

// Rendering a component by giving a DOM element to create a react root

ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);