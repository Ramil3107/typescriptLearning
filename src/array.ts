// Third Lesson (arrays)

const stringArray: Array<string> = ["I", "am"]
// or
const stringArray2: string[] = ["Me", "too"]
//or
const stringArray3 = ["still", "string"]


// stringArray.push(5) (number is wrong type)
stringArray.push("string") // OK

//==================================================================================

// Arrays in ararys

const arrayWithStringArray: string[][] = [["hello"], ["I", "am"], ["string", "arary"]]

// arrayWithStringArray.push("string")  -- string (wrong type)
// arrayWithStringArray.push([5, 4, 5]) -- array with numbers (wrong type)
arrayWithStringArray.push(["array", "typescript"]) // -- OK


//==================================================================================

//Tuples

const tuple: [string, number, boolean] = ["string", 10, true] // OK
// const tuple2: [string, number, boolean] = [true, false, 10]  --- (wrong type)