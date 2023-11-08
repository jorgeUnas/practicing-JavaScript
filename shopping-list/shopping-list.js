const inputShopList = document.querySelector('input');
const buttonShopList = document.querySelector('button');
const ulShopList = document.querySelector('ul');

buttonShopList.addEventListener('click', () =>{
    let inputValue = inputShopList.value;
    inputShopList.value = '';

// creating item list
const listItem = document.createElement('li');
const item = document.createElement('span');
const buttonRemove = document.createElement('button');

listItem.appendChild(item);
listItem.appendChild(buttonRemove);

item.textContent = inputValue;
buttonRemove.textContent = 'Delete';

ulShopList.appendChild(listItem);

//Remove item

buttonRemove.addEventListener('click', () => {
    listItem.remove();
});

//adding focus to the input
inputShopList.focus();

});

