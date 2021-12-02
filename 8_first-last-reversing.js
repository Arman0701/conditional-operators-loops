'use strict';

// Enter a number. Reverse its first and last digits. Print the new number.

function firstLast(number){
    let str = String(number).split('');
    let tmp = str.shift();
    str.unshift(str.pop())
    str.push(tmp);

    return Number(str.join(''));
}

console.log(firstLast(2));
console.log(firstLast(13));
console.log(firstLast(895796));

