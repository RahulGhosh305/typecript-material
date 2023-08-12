// Union-Intersection-Enum type
type NoobDeveloper = {
    name: string;
}

type JuniorDeveloper = NoobDeveloper & { // Intersection
    expertise: string;
    experience: number;
}

enum level {
    Senior = "Senior",
    Junior = "Junior",
    Middle = "Middle"
}

type SeniorDeveloper = JuniorDeveloper & { // Intersection
    level: level;
}

const juniorDeveloper: JuniorDeveloper | NoobDeveloper = { // Union
    name: "John",
    experience: 2,
    expertise: "JavaScript"
}

const seniorDev: SeniorDeveloper = {
    name: "John",
    experience: 2,
    expertise: "Java",
    level: level.Senior
}