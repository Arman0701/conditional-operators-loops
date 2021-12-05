'use strict'

// Print the following pattern:

function triangle(number){
    let h = 5;
    let result = [];
    let tiv = 1;
    for (let i=0; i<number; i++){
        result.push([]);
    }  
    let k=0;
    while(result[number-1].length<number){
        console.log(tiv);
        for (let i=k++; i<number; i++){
            result[i].push(tiv++);
        }
    }
    console.log(result);
}

console.log(triangle(7));

/* 


1
2 6      
3 7 10         
4 8 11 13      
5 9 12 14 15   




*/