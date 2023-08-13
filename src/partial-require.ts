// Partial and Require

interface Person101 {
    name: string;
    age: number;
    contact: string;
}

// Partial
type Optional = Partial<Person101>

// Require 
type MustNeed = Required<Person101>