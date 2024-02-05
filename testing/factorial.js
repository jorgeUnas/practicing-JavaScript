const Calculate = {
  factorial(number){
    let result = 1;
    for(let i = number; i > 0; i--){
      result *= i;
    }
    return result;
  }
}
  
  module.exports = Calculate;