//Creating a new container 

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'I am a DOM div';

container.appendChild(content); 

// Adding a paragraph
const redPara = document.createElement('p');
redPara.textContent = 'I am a red paragraph';
redPara.style.color = 'red';
//redPara.style.cssText = "background-color: red;"
container.appendChild(redPara); 

//Adding an h3

const heading3 = document.createElement('h3');
heading3.textContent = 'I am a blue h3';
heading3.style.color = 'blue';
container.appendChild(heading3);

// Creating a new div

const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.borderColor = 'black';
//newDiv.textContent = 'black';

// Adding childs to this new div
const h3Child = document.createElement('h3');
const pChild= document.createElement('p');
h3Child.textContent = 'I am in a div';
pChild.textContent = 'ME TOO!'

newDiv.appendChild(h3Child);
newDiv.appendChild(pChild);
container.appendChild(newDiv);

// second event method
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Third event method 
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
  alert("How you doing?");
});

// parameter use
const btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

btn4.addEventListener('click', function (e) {
  console.log(e.target);
});

