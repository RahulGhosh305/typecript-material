"use strict";
// Nullish - Ternary
const checkAge = 20;
const isAdult = checkAge > 18 ? "Yes" : "No";
console.log(isAdult);
// null, undefine -> nullish operator 
const isAuthenticate = null;
const userName = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
console.log(userName);
