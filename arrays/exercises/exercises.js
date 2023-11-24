// 1 exercise: 

 //mi solution 

/*
function camelize(str){
    let camelStr = str.split('-');
    camelStr = camelStr.map(item  => item[0].toLocaleUpperCase()+item.slice(1));
    camelStr = camelStr.join('');
    camelStr = camelStr[0].toLowerCase() + camelStr.substr(1);
    return camelStr;
}
*/

// more compact solution

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
