"use strict";
// Generic Function and Tuples
function createArray(param) {
    return [param];
}
const result1 = createArray("Ban");
const createArray1 = (param) => {
    return [param];
};
const result2 = createArray1("Ban");
const result3 = createArray1(11);
const result4 = createArray1({ name: "Joy" });
// Generic Function in Tuples
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
const result5 = createArray2({ name: "Joy" }, true);
// Spreading declearing issue solve by Generic
const meAddmyCurshMind = (info) => {
    const myCursh = "Jerry";
    const newData = Object.assign(Object.assign({}, info), { myCursh });
    return newData;
};
const myInfo = {
    name: "John",
    age: 33,
    salary: 30000
};
const result11 = meAddmyCurshMind(myInfo);
