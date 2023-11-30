const palindromes = function (str) {
    
    let re = /\w+/gi;
    let cleanStr = str.match(re).join('').toLocaleLowerCase();
    
    let revStr = cleanStr.split('').reverse().join('');
    
    return cleanStr == revStr;
    

};

console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
console.log(palindromes('r3ace3car'));
console.log(palindromes('rac3e3car'));

/*
Suggested solution:

const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};

*/

console.log('hello');

// Do not edit below this line
module.exports = palindromes;