// Nullish - Ternary
const checkAge = 20;
const isAdult = checkAge > 18 ? "Yes" : "No";
console.log(isAdult);

// null, undefine -> nullish operator 
const isAuthenticate = null;
const userName = isAuthenticate ?? "Guest"
console.log(userName);