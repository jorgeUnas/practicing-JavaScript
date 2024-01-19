const convertToBaby = arr => {
  let converArr = [];
  for(let i = 0; i < arr.length; i++){
    converArr.push('baby '+arr[i])
  }
  return converArr;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 