/*Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return
the length between them including the 2 characters. If there are less than 2 or more than 
2 occurrences of the character the function should return 0.

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

// Write function below

const subLength = (str, char) => {
  let occurrences = {'char': 0};
  let arr = str.split('');
  
  if(str.includes(char) == false){   // if character is not included return 0
    return 0;
  }else{
    for(let i of arr){        // count occurrences of characters
      if(i == char){
        occurrences['char']++;
      }
    }

    if(occurrences['char'] > 2 || occurrences['char'] < 2){   // 0 for characters that appears less or more than twice
      return 0;
    }else{
      for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
          if (i != j && arr[i] == arr[j]){
            return j - i + 1;                 //Distance between the same character in the string
          }
        }
      }
    }
    
  }
};

console.log(
  subLength('Saturday', 'a')
);
console.log(
subLength('summer', 'm')
);
console.log(
subLength('uncopyrightable', 'u')
);


// Sugested solution 

/*const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};*/