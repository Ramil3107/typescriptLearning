// Third Lesson (objects)

type myObject = {
    a: string,
    b: number,
    c: boolean
}

const obj: myObject = {     // OK
    a: "hello",
    b: 25,
    c: true
}
// const obj: myObject = {     // (wrong prop types)
//     a: 444,
//     b: false,
//     c: "string"
// }

//==================================================================================

// readonly and ?(not require prop)

interface aboutMe {
    readonly name: string,     // readonly (NOT changeble)
    age: number,
    isReligious?: boolean,     // not required, cause have ? operator after prop name
    [key: string]: boolean | undefined | number | string    // maybe extra props with indicated types
}

const ramil: aboutMe = {
    name: "Ramil",
    age: 24
}


// ramil.name = "Andrey"  --- can't change read-only prop
ramil.age = 25
console.log(ramil.isReligious)  // output undefined



//==================================================================================

// Extends Interfaces

// (unspoken rule) Add I as first letter in interfaces names


interface IPerson {
    name: string,
    age: number
}

interface IAccount {
    email: string,
    login: string,
    id: number
}

interface IDeveloper extends IPerson, IAccount {   // extends another two interfaces
    skills: string[],
    level: number
}

const developer: IDeveloper = {
    name: "Ramil",
    age: 25,
    email: "abbasov.ram3107@gmail.com",
    login: "Ramik",
    id: 5,
    skills: ["JS", "TS"],
    level: 99
}