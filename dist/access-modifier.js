"use strict";
// Access Modifer
class MyAccount {
    constructor(name, balance, age) {
        this.name = name,
            this._balance = balance,
            this.age = age;
    }
    getBalance() {
        console.log(`Balance is ${this._balance}`);
    }
    depositeBalance(money) {
        console.log(`New Balance is ${money + this._balance}`);
    }
}
const balanceCheck = new MyAccount("Mr.X", 20, 5);
// Protected properties access
class Test extends MyAccount {
    test() {
        console.log(this.age);
    }
}
