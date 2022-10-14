import axios from "axios"



//First Lesson (basic tsc)


interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        const todo = response.data as Todo

        const id = todo.id
        const title = todo.title
        const isCompleted = todo.completed


        logTodo(id, title, isCompleted)
    })

const logTodo = (id: number, title: string, isCompleted: boolean) => {
    console.log(`
        TODO ID: ${id}
        TODO TITLE: ${title}
        TODO IS COMPLETED: ${isCompleted}
        `)
}


//==================================================================================


// Second Lesson (annotaion, Aliases, Uninon, )

let point: number

// point = "hello"  (wrong type)
point = 5 // OK 


type Score = number | string // union 

const myScore: Score = "5"


let x = 6 // x type is numer without annotation
//or
let y: number = 10

// x = "string"  (wrong type)
// y = "string"  (wrong type)

x = 10 // OK
y = 15 // OK
