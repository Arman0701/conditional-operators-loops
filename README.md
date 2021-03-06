# About this homework

## Required tasks

---
## 1. for vs for-in 
Try to write a the following loop with while and do-while: 
```javascript
for (var i = 0; i < a.length; i++) { 
 console.log("for", i, a[i]); 
} 
```
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/1.0_while_do-while.js)

-----------------------------------------------
### 1 . Given a number. Print “odd” if the number is odd and “even” if itʼs even. 
|Input |Output |
|----|------|
|125 |“odd” |
|35 |“odd” |
|20 |“even” |
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/1_odd-or-even.js)

---
### 2.Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees). 
| Input |  Output | 
|----|-----|
| 45, | 90 | 45 | 
| 30, | 30 | 120 | 
| 75, | 25 | 80 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/2_third-angle.js)

---
### 3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same. 
| Input | Output | 
|----|----|
| 367 | 736 | 
| 1002 | 2100 | 
| 250 | 250 | 
| 8 | 8 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/3_reverse-number.js)

---
### 4. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message. 
| Input | Output|
|----|----| 
| 21 | “21 is a multiple of 3 and 7.” | 
| 35 | “35 is a multiple of 5 and 7.“ | 
| 13 | “13 is not a multiple of 3, 5 or 7.” | 
| 420 | “420 is a multiple of 3, 5 and 7.” | 
| 24 | “24 is a multiple of 3.” | 

[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/4_multiple-of-num.js)

---
### 5. . Given three numbers. Sort them by the ascending order. 
|Input  | Output |
|----|----|
|45 , 26, 78 | 26, 45, 78 |
|-23, -456, 0 |-456, -23, 0 |
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/5_sorting-three-nums.js)

---
### 6.Find the sign of product of three numbers without multiplication operator. Display the specified sign. 
| Input|  Output|  
|----|----|
| -14, 5, 0 | “unsigned” | 
| -8, 9, -6 | “+” | 
| 4, 19, -2 | “-” | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/6_prod-of-3-numbers.js)

---
### 7. Insert a digit and a number. Check whether the digits contains in the number or not. 
| Input | Output | 
|----|----|
| 5, 2463 | ‘Noʼ | 
| 4, 6 | ‘Noʼ | 
| 8, 45689 | ‘Yesʼ | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/7_check-for-inclusion.js)

---
### 8.Enter a number. Reverse its first and last digits. Print the new number. 
| Input|  Output | 
|----|----|
| 2  | 2 | 
| 13 | 31 | 
| 895796 | 695798 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/8_first-last-reversing.js)

---
### 9.Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.  
| Input | Output | 
|----|----|
| 401 | ‘yesʼ | 
| 63 | ‘noʼ | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/9_is-prime-number.js)

---
### 10.Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2) 
| Input | Output | 
| --- | ----------- | 
|  0 |  0 | 
|  2 |  1 | 
| 10 | 55 | 
| 20 | 6765 | 

[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/10_fibonacci.js)

---
### 11.Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder. 
| Input | Output | 
|---|---|
| 1233 | ‘Quotient is 2.ʼ | 
| 5 | ‘Quotient is 1.ʼ | 
| 0 ‘| Cannot calculate.ʼ | 
| 455 | ‘Remainder is 2.ʼ | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/11_remainder-or-quotient.js)

---
### 12.Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words from the array. 
| Input | Output | 
|---|---|
| “_, we have a _.” [“Houston”, “problem”] | “Houston, we have a problem.” | 
| “If at _ you donʼt _, try, try _.”, [“first”, “succeed”, “again”] | “If at first you donʼt succeed, try, try again.” | 
| “May the _ _ _ _.” [“Force”, “be”, “with”, “you”] | “May the Force be with you.” | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/12_replace-words.js)

---
### 13. Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers in a separate array. Arrange them such as from the beginning are the odds and from the ending the evens. 
| Input | Output | 
|---|---|
| [8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3] | [1, 5, 7, 3, 8, 0, 12] | 
| [8, 8, ‘mehʼ, 6] | [8, 8, 6]| 
| [null, null, 1, undefined, 5, 9, false] | [1, 5, 9] | 
 [Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/13_filtering-array.js)

 ---
 ### 14.Given an array of strings and numbers. Print the number of integers and the number of strings in the array. 
| Input | Output | 
|---|---|
| [1, ‘10ʼ, ‘hiʼ, 2, 3] | “Numbers: 3, Strings: 2” | 
| [1, 4, ‘i am a stringʼ, ‘456ʼ] | “Numbers: 2, Strings: 2”| 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/14_counts-of-types.js)

---
### 15. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths. 
| Input | Output | 
|---|---|
| [“anymore”, “raven”, “me”, “communicate”] | 13 | 
| [“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”] | 14| 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/15_sum-of-strings-lengths.js)

---
### 16.Given an array of numbers and a number. Find the index of a first element which is equal to that number. If there is not such a number, that find the index of the first element which is the closest to it. 
| Input | Output | 
|---|---|
| [21, -9, 15, 2116, -71, 33], -71|  4 | 
| [ 36, -12, 47, -58, 148, -55, -19, 10], -56 | 5 | 
| [5, 46, 17, -2, 89, 0, 26 ] 36 | 1 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/16_closest-index.js)

---
### 17.Given a sentence as a string. Split it according to space and comma and create an array consisting of the words of the array. The last word should not contain the last . or ! . 
| Input | Output | 
|----|----|
| “May the Force be with you.” | [“May”, “the”, “Force”, “be”, “with”, “you”] | 
| “Keep your friends close, but your enemies closer.” | [“Keep”, “your”, “friends”, “close”, “but”, “your”, “enemies”, “closer”] | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/17_without-given-characters.js)

---
### 18. Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new array where each element from that array is placed under the index of its value. Start from the smallest value and end with the biggest one. If there are missing values, put in its places undefined. 
| Input | Output | 
| --------- | ----------- | 
| [4, 3, 0, 9] | [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9] |
| [26, 30, 19, 5] | [5, undefined x 13, 19, undefined x 4, 26, undefined x 3 ] | 

[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/18_index-value.js)

---
### 19. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array. 
| Input | Output | 
|---|---|
| [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] | [12, 1, 13, 15] | 
| [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] | [45, 8, 0, -6] | 
| [[1], [2], [3], [4]] | [1, 2, 3, 4] | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/19_sum-of-values-in-arrays.js)

---
### 20.Print the following pattern: 
#### 1 
#### 2 6 
#### 3 7 10 
#### 4 8 11 13 
#### 5 9 12 14 15 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/20_triangle-of-nums.js)

---
# Now Optional Tasks

### 1. Enter a number. Find the difference between its biggest and smallest digits. 
| Input | Output | 
|---|---|
| 5 | 0 | 
| 152 | 4 | 
| 4593653 | 6 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/optional-1_difference-of-digits.js)

---
### 2.Convert base-2 number to base-10 
| Input | Output | 
|---|---|
| 010 | 2 | 
| 10010 | 18 | 
| 0101011 | 43 | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/optional-2_convert-binary-to-decimal.js)

---
### 3. Takes two arrays and insert the second array in the middle of the first array. The first array always has two elements. 
|  Input | Output |
|---|---|
|  [1, 10], [2, 3, 4, 5, 6, 7, 8, 9] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]| 
|  [15, 150], [45, 75, 35] | [15, 45, 75, 35, 150] | 
|  [[1, 2], [5, 6]], [[3, 4]] | [[1, 2], [3, 4], [5, 6]] | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/optional-3_insert-array.js)

---
### 4.  Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ … _ 3 _ 2 _ 1 , 0! = 1 ) 
| Input | Output | 
|---|---|
| 5 | “5! = 120” | 
| 1 | “1! = 1” | 
| 7 | “7! = 5040” | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/optional-4_factorial.js)

---
### 5.Write a program to check the validity of password input by users. Validation : 
### At least 1 letter between [a-z] and 1 letter between [A-Z]. 
### At least 1 number between [0-9]. 
### At least 1 character from [$#@]. 
### Minimum length 6 characters. 
### Maximum length 16 characters. 
| Input | Output | 
|---|---|
| 12asdf | “Invalid” | 
| Aaza1234566# | “Valid” | 
[Solution](https://github.com/Arman0701/conditional-operators-loops/blob/master/optional-5_simple-validation.js)

# The END ! :)
