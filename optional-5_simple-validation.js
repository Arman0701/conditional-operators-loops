'use strict'

// Write a program to check the validity of password input by users. Validation :
// At least 1 letter between [a-z] and 1 letter between [A-Z].
// At least 1 number between [0-9].
// At least 1 character from [$#@].
// Minimum length 6 characters.
// Maximum length 16 characters.

function validate(password){
    if(/[^a-zA-Z]{1,}[0-9]{1,}[$#@]$/.test(password) && password.length>=6 && password.length<=16){ // wrong code
        return 'valid'
    } else return'invalid'
}

console.log(validate("12asdf"));
console.log(validate("Aaza1234566#"));