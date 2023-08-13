"use strict";
// Make a class using Type and multiple Interface
class UserInfo {
    constructor(firstName, lastName) {
        this.propertise = {
            firstName: firstName,
            lastName: lastName
        };
        this.methods = {
            fullName() {
                return `${firstName} ${lastName}`;
            },
        };
    }
}
const User50 = new UserInfo("Rahul", "Ghosh");
console.log(User50.methods.fullName());
