// Interface
// Used of Object

interface ICheckUser { //Interface type
    name: string;
    age: number;
}

const User201: ICheckUser = { //Interface
    name: "Doe",
    age: 33
}

interface IExtened extends ICheckUser {
    level: string;
}

const extentedUser: IExtened = {
    name: "John",
    age: 34,
    level: "Senior"
}
