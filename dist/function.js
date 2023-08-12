"use strict";
// Function
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(3, 5);
function addDefaultParameter(num1, num2 = 10) {
    return num1 + num2;
}
addDefaultParameter(5);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
addArrow(5, 6);
const createUserMethod = {
    name: "John",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    }
};
// Speard Operator
const myFriends = ["Mina", "Tina", "Rita"];
const newFriends = ["Sajib", "Kamal", "Jamal"];
myFriends.push(...newFriends);
console.log(myFriends);
// Rest Operator
function greeting(...friends) {
    console.log(friends);
    friends.forEach(friend => {
        console.log(`Hi ${friend}`);
    });
}
greeting("Joy", "Rahul", "Rajib", "Sajib");
// Destructure
const Obj = {
    name: "Joy",
    age: 66
};
const { age } = Obj;
