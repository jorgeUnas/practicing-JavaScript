console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
//throwError()

console.log('Because of the error, this will not be printed!');

// 2. Constructing errors 

//console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

// or the same result using the keyword 'new'

//console.log(new Error('I told you. Your password is too weak.'));
// Prints: Error: Your password is too weak.

// 3. The throw Keyword

throw Error('Username or password does not match');
console.log('This will never run');

