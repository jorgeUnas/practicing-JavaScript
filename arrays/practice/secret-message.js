let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage.length);

secretMessage[7] = 'right';

secretMessage.shift();
console.log(secretMessage.length);

secretMessage.unshift('Programming');
console.log(secretMessage.length);

secretMessage.splice(6, 5, 'know');
//console.log(secretMessage);

let message = secretMessage.join(' ');
console.log(message);