interface ValueContainer<Value> {
    value: Value
}

type StringContainer = ValueContainer<string>
type NumberContainer = ValueContainer<number>
type BooleanContainer = ValueContainer<boolean>

const stringObject: StringContainer = {
    value: "hello"
}

const numberObject: NumberContainer = {
    value: 100
}


class ArrayOfAnything<Type> {
    constructor(public collection: Type[]) { }

    get(index: number): Type {
        return this.collection[index]
    }
}

const numbers = new ArrayOfAnything<number>([1, 2, 3, 4, 5, 6])



interface Length {
    length: number
}


function printLength<T extends Length>(arg: T): void {
    console.log(arg.length)
}

printLength("hello")  // 5
printLength([1, 2, 3, 4]) // 4
printLength(["hello", "world"]) // 2


function printProperty<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key])
}

const myObj = {
    a: 1,
    b: 2,
    c: 3
}

printProperty(myObj, "c") // OK
// printProperty(myObj, "d")   NOT OK cause myObject haven't  "d"  property