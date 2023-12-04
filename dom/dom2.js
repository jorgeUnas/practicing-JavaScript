//alert('Hello');

const heading = document.querySelector('#heading');
console.log(heading);

const para = document.querySelectorAll('.para');

const links = document.querySelectorAll('a');
const firstLink = links[0].getAttribute('href');

const books = document.querySelector('#books');

console.log(heading.nodeType);
console.log(heading.innerHTML);
console.log(heading.childNodes);

console.log(para[0]);
console.log(para[1]);

console.log(links.length);
console.log(links[1].innerHTML);
console.log(firstLink);

para[0].style.color = 'red';
links[2].style.fontSize = '25px';


// appending a new li element 

const newBook = document.createElement('li');
const nameNewBook = document.createTextNode('Metamorfosis');
newBook.style.color = 'green';

newBook.appendChild(nameNewBook);
books.appendChild(newBook);

// appending paragraphs

const paraHead = document.createElement('p');
const paraList = document.createElement('p');
const paraPara = document.createElement('p');

const textParaHead = document.createTextNode('Im a paragraph appended to the heading.');
const textParaList = document.createTextNode('Im a paragraph appended to the list.');
const textParaPara = document.createTextNode('Im a paragraph appended to other paragraph.');


paraHead.appendChild(textParaHead);
paraList.appendChild(textParaList);
paraPara.appendChild(textParaPara);
heading.appendChild(paraHead);
books.appendChild(paraList);

para[1].appendChild(paraPara);

console.log(para[1].innerHTML);



