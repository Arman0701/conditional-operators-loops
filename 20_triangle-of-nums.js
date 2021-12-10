'use strict'

// Print the following pattern:
/* 
1
2 6      
3 7 10         
4 8 11 13      
5 9 12 14 15   
*/

function calc(n){
    let i = 2;
    let size = 1;
    let lSize = size;
    for (; ; i++){
        lSize = size;
        size += i;
        if (size>=n) break;
    }
    return n-lSize < size-n ? --i : i;
}

function triangle(height){
    let result = [];
    let number = 1;
    for (let i=0; i<height; i++){
        result.push([]);
    }  
    let k=0;
    while(result[height-1].length<height){
        for (let i=k++; i<height; i++){
            result[i].push(String(number++));
        }
    }
    return result.join('\n');
}

console.log(triangle(9)); // by height
console.log(triangle(calc(48))); // by near size 

