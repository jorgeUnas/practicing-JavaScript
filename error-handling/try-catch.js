try{
  throw Error('Damn! An error.');
}catch(e){
  console.log(e);
}
console.log('The thrown error that was caught in the try...catch statement!');