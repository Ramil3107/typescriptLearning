"use strict";
const stringObject = {
    value: "hello"
};
const numberObject = {
    value: 100
};
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
const numbers = new ArrayOfAnything([1, 2, 3, 4, 5, 6]);
function printLength(arg) {
    console.log(arg.length);
}
printLength("hello"); // 5
printLength([1, 2, 3, 4]); // 4
printLength(["hello", "world"]); // 2
function printProperty(obj, key) {
    console.log(obj[key]);
}
const myObj = {
    a: 1,
    b: 2,
    c: 3
};
printProperty(myObj, "c"); // OK
// printProperty(myObj, "d")   NOT OK cause myObject haven't  "d"  property
