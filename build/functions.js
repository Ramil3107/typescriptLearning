"use strict";
const fn1 = (num) => {
    return String(num);
};
const fn2 = (cb) => {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
};
// default values 
function createPoint(x = 0, y = 0) {
    return [x, y];
}
// Rest
function rest(...nums) {
    return nums.join("-");
}
const smartphone = {
    product: "huawei",
    price: 333,
    color: "yuellow"
};
const printProduct = (product) => {
    console.log(product);
};
printProduct(smartphone);
