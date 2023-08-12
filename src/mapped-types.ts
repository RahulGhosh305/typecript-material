// Mapped in type

type AreaNumber = {
    height: number;
    weight: number;
    depth: number;
}
type AreaNumToString = {
    [key in keyof AreaNumber]: string;
}


type Area<T> = {
    [key in keyof T]: T[key];
}
const area1: Area<{ height: number, weight: string }> = {
    height: 10,
    weight: "10"
}


type AreaString = {
    readonly height: string;
    readonly weight: string;
}

const rectangleArea: AreaString = {
    height: '3',
    weight: '4'
}