// This is the structure to render jsx elements 

const container = document.getElementById('container');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// or using a variable 

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);