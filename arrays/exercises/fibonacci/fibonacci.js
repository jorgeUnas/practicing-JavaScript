const fibonacci = function(member) {
    if (member < 0) return 'Oops!';
    if (member == 0) return 0;
    
    let fibSeq = [1, 1];
    for (let i = 2; i < member; i++){
            fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]; 
    }
    return fibSeq[member-1];
};

console.log(fibonacci(0))
console.log(fibonacci(6))
console.log(fibonacci(15))
console.log(fibonacci(25))
console.log(fibonacci(-25))
console.log(fibonacci("1"))
console.log(fibonacci("8"))
console.log(fibonacci("16"))


/* Suggested solution

const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

*/


// Do not edit below this line
module.exports = fibonacci;