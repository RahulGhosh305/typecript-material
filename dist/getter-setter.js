"use strict";
// Access Modifer
class MyAccountClass {
    constructor(name, balance, age) {
        this.name = name,
            this._balance = balance,
            this.age = age;
    }
    getBalance() {
        console.log(`Balance is ${this._balance}`);
    }
    // Getter for get direct access private propety
    get getterBalance() {
        return this._balance;
    }
    depositeBalance(money) {
        console.log(`New Balance is ${money + this._balance}`);
    }
    // Setter for get direct access private propety
    set setterBalance(money) {
        this._balance = this._balance + money;
    }
}
const balanceCheckInfo = new MyAccountClass("Mr.X", 20, 5);
