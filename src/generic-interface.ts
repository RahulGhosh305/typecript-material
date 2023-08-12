// Generic Interface

interface CrushInterfcae<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}

const cursh11: CrushInterfcae<boolean> = {
    name: "Doe",
    husband: true
}
const cursh12: CrushInterfcae<string> = {
    name: "Doe",
    husband: "Smith"
}
interface PersondInterface {
    name: string,
    age: number
}
const cursh13: CrushInterfcae<PersondInterface, PersondInterface> = {
    name: "Doe",
    husband: {
        name: "Smith",
        age: 34
    },
    wife: {
        name: "Jeeny",
        age: 33
    }
}