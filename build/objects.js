"use strict";
// Third Lesson (objects)
const obj = {
    a: "hello",
    b: 25,
    c: true
};
const ramil = {
    name: "Ramil",
    age: 24
};
// ramil.name = "Andrey"  --- can't change read-only prop
ramil.age = 25;
console.log(ramil.isReligious); // output undefined
const developer = {
    name: "Ramil",
    age: 25,
    email: "abbasov.ram3107@gmail.com",
    login: "Ramik",
    id: 5,
    skills: ["JS", "TS"],
    level: 99
};
