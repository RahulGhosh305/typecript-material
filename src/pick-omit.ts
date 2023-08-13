// Pick

interface PersonInterface {
    name: string,
    age: number,
    contactNo: string
}

type Contact = Pick<PersonInterface, "contactNo" | "age">

// Omit

type InfoPerson = Omit<PersonInterface, "contactNo">