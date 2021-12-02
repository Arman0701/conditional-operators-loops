'use strict'

/*Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
(Sum of the angles of a triangle equals 180 degrees).*/

function thirdAngle(angle1, angle2){
    return 180 - angle1 - angle2;
}

console.log(thirdAngle(45, 90)); // returns 45
console.log(thirdAngle(30, 30)); // returns 120
console.log(thirdAngle(75, 25)); // returns 80