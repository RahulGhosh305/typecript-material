// Make a class using Type and multiple Interface


interface IData {
    firstName: string;
    lastName: string;
}

interface IMethod {
    fullName(): string;
}

interface Model<X, Y> {
    propertise: X;
    methods: Y;
}

type ModelType = Model<IData, IMethod>

class UserInfo implements ModelType {
    propertise: IData;
    methods: IMethod;

    constructor(firstName: string, lastName: string) {
        this.propertise = {
            firstName: firstName,
            lastName: lastName
        }
        this.methods = {
            fullName(): string {
                return `${firstName} ${lastName}`
            },
        }
    }
}

const User50 = new UserInfo("Rahul", "Ghosh")
console.log(User50.methods.fullName());