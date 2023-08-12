"use strict";
// Generic in Constants
const addMeWithMyCrush = (info) => {
    const crush = "Jenny";
    const newData = Object.assign(Object.assign({}, info), { crush });
    return newData;
};
const myInformation = {
    name: "John",
    age: 33,
    salary: 222
};
const result110 = addMeWithMyCrush(myInformation);
