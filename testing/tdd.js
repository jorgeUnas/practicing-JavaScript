const Calculate = {
	sum(inputArray) {
	const sum = inputArray.reduce((sum, current) => 
      sum + current, 0);
    return sum;
	}
}

module.exports = Calculate;