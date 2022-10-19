const fn1 = (num: number) : string => {
    return String(num)
}

type Callback = (num: number) => string

const fn2 = (cb?: Callback) => {
    if(cb === undefined) {
        cb = String
    }
    cb(12)
}

// default values 
function createPoint(x: number = 0, y: number = 0) : [number, number] {
    return [x, y]
}


// Rest
function rest(...nums : number[]) : string {
    return nums.join("-")
}

interface Product {
    product: string,
    price: number
}

const smartphone = {
    product: "huawei",
    price:333,
    color:"yuellow"
}

const printProduct = (product : Product) : void => {
    console.log(product)
}

printProduct(smartphone)

