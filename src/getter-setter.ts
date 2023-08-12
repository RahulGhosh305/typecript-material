// Access Modifer
class MyAccountClass {
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

    // Getter for get direct access private propety
    get getterBalance(): number {
        return this._balance
    }

    depositeBalance(money: number) {
        console.log(`New Balance is ${money + this._balance}`);
    }

    // Setter for get direct access private propety
    set setterBalance(money: number) {
        this._balance = this._balance + money
    }
}

const balanceCheckInfo = new MyAccountClass("Mr.X", 20, 5)

