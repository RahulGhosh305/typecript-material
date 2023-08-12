"use strict";
// Type Assertion
let text;
text = "Next Level Web Development";
text.indexOf("Web"); // Type Assertion
let counter;
counter = 345;
counter.toFixed(1); // Type Assertion
const gramToKilo = (param) => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `Weight is ${value}`;
    }
    else if (typeof param === "number") {
        const value = param * 1000;
        return `Weight is ${value}`;
    }
};
const stringValue = gramToKilo("10"); // Type Assertion
const numberValue = gramToKilo(10); // Type Assertion
try {
}
catch (error) {
    console.log(error.message); // Type Assertion
}
