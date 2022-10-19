"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const isCompleted = todo.completed;
    logTodo(id, title, isCompleted);
});
const logTodo = (id, title, isCompleted) => {
    console.log(`
        TODO ID: ${id}
        TODO TITLE: ${title}
        TODO IS COMPLETED: ${isCompleted}
        `);
};
//==================================================================================
// Second Lesson (annotaion, Aliases, Uninon, )
let point;
// point = "hello"  (wrong type)
point = 5; // OK 
const myScore = "5";
let x = 6; // x type is numer without annotation
//or
let y = 10;
// x = "string"  (wrong type)
// y = "string"  (wrong type)
x = 10; // OK
y = 15; // OK
