'use strict'

// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
// numbers in a separate array. Arrange them such as from the beginning are the odds and from the
// ending the evens.

function filteringNumbers(array){
    let odds = [];
    let evens = [];
    for (let i=0; i<array.length; i++){
        if (typeof array[i] == 'number' && !isNaN(array[i])){
            array[i] % 2 === 0 ? evens.push(array[i]) : odds.push(array[i]);
        }
    }
    
    return odds.concat(evens);
}

console.log(filteringNumbers([8, 8, "meh", 6]));
console.log(filteringNumbers([8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3]));
console.log(filteringNumbers([null, null, 1, undefined, 5, 9, false, NaN]));