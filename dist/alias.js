"use strict";
const crush1 = {
    name: "Mina",
    age: 33,
    profession: "Web Developer",
    address: "Dhaka",
};
const crush2 = {
    name: "Tina",
    profession: "Web Developer",
    address: "Comilla",
};
const isCrushMarrid = false;
const allFoundNumber = [33, 88, 6];
const calcuate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calcuate(10, 20, (x, y) => x + y);
