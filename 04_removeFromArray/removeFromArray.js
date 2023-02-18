const removeFromArray = function(arr,...ints) {
    for( let int of ints){
        arr = arr.filter(item => item !== int);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
