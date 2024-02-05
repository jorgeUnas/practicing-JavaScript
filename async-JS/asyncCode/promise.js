const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory['sunglasses'] > 0){
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor); // this is the promise constructor method
}   

const orderPromise = orderSunglasses();

console.log(orderPromise);