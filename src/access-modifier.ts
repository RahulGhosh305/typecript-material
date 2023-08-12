// Access Modifer
class MyAccount {
    public readonly name: string;
    private _balance: number;
    protected age: number;
    constructor(name: string, balance: number, age: number) {
        this.name = name,
            this._balance = balance,
            this.age = age
    }

    getBalance() {
        console.log(`Balance is ${this._balance}`);
    }

    depositeBalance(money: number) {
        console.log(`New Balance is ${money + this._balance}`);
    }
}

const balanceCheck = new MyAccount("Mr.X", 20, 5)


// Protected properties access
class Test extends MyAccount {
    test() {
        console.log(this.age);
    }
}