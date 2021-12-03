'use strict'

// Print the following pattern:

function triangle(number){
    let str = '';
    for (let i=1; i<=5; i++){
        str += String(i);
        for(let j=0; j<i; j++){
            str += String(j);
        }
    }
}

console.log(triangle(20));

/* 


1
2 6      
3 7 10         
4 8 11 13      
5 9 12 14 15   




*/