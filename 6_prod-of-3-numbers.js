'use strict'

// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

function productOf(first, second, third){
    let arr = [first, second, third];
    let negCount = 0;
    let result = '';

    for (let i=0; i<arr.length; i++){
        if (arr[i] < 0){
            negCount++;
        } else if (arr[i] == 0){
            return "unsigned"
        }
    }

    switch(negCount){
        case 1:
        case 3: 
            result = "-";
            break;
        case 2:
            result = "+";
    }

    return result;
}

console.log(productOf(-14, 5, 0));
console.log(productOf(-8, 9, -6));
console.log(productOf(4, 19, -2));



