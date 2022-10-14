"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var isCompleted = todo.completed;
    console.log("\n        TODO ID: ".concat(id, "\n        TODO TITLE: ").concat(title, "\n        TODO IS COMPLETED: ").concat(isCompleted, "\n        "));
});
