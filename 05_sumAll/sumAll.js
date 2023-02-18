const sumAll = function(numOne, numTwo) {
    let sum = 0;

    if(numOne < 0 || numTwo < 0){
        return 'ERROR';
    }

    if (numOne > numTwo) {
    [numOne, numTwo] = [numTwo, numOne];
    }

    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return 'ERROR';
    }

    for(let i=numOne; i<=numTwo; i++){
        sum +=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
