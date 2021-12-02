'use strict'

// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
// sum, print the quotient, otherwise print the remainder.

function remainderOrQuotient(number){
    let sum = 0;
    let prod = 1;
    let str = String(number).split('');
    for (let i=0; i<str.length; i++){
        sum += Number(str[i]);
        prod *= Number(str[i]);
    }
    if (prod % sum === 0){
        return `Quotient is ${prod / sum}`
    } else if (prod === 0 && sum === 0){
        return "Cannot calculate"
    } else {
        return `Remainder is ${Math.floor(prod % sum)}`
    }

}

console.log(remainderOrQuotient(1233));
console.log(remainderOrQuotient(5));
console.log(remainderOrQuotient(0));
console.log(remainderOrQuotient(455));