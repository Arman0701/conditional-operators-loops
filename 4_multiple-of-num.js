'use strict'

// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function multiple(number){
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let result;

    if (number % 3===0) flag1 = true;
    if (number % 5===0) flag2 = true;
    if (number % 7===0) flag3 = true;

    if (flag1) result = `${number} is multiple of 3`;
    if (flag2) result = `${number} is multiple of 5`;
    if (flag3) result = `${number} is multiple of 7`;

    if (flag1 && flag2) result = `${number} is multiple of 3 and 5`;
    if (flag2 && flag3) result = `${number} is multiple of 5 and 7`;
    if (flag1 && flag3) result = `${number} is multiple of 3 and 7`;

    if (number % (3*5*7)===0) result = `${number} is multiple of 3,5 and 7`;
    else result = `${number} isn't multiple of 3,5 and 7`;

    return result;
}

console.log(multiple(21));
console.log(multiple(35));
console.log(multiple(13));
console.log(multiple(420));
console.log(multiple(24));