// First a silly function that return a promise with many nested setTimeout

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?');
    setTimeout(() => {
      console.log('Should I make ramen...?');
      setTimeout(() => {
        console.log('Should I make eggs...?');
        setTimeout(() => {
          console.log('Should I make chicken...?');
          resolve('beans');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
};


// Now the native promise decalaration

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// nativePromiseDinner();



// async/await version:
async function announceDinner() {
  // Write your code below:
  let resolvedValue = await brainstormDinner();
  console.log(`I'm going to make ${resolvedValue} for dinner.`);
}

announceDinner();
