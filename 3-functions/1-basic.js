// what is a function ?
// how to define it
// how to execute it
// how to call in diff ways
// arguments in function and how are they diff from JAVA
// scope in function - this is important
// hoisting in functions - this is important
// self invoking functions -- which i also call as IIFE(Immediate invoking function expression)
// closures in function
// recursive mechanism
// this keyword
// to use call(), apply() and bind()



// function keyword
// function name
// executor expression
// function body
function test(a, b) {
    console.log('function executed...');
    return 123;
}
var result = test();
console.log(result);

console.log("#######################################");
// Now lets see how we can use the arguments and the return type
function test2(a, b) {
    console.log(a, b);
    return 234;
}
console.log(test2()); // we get undefined, undefined
console.log(test2(10, 20)); // we get 10, 20 printed

function test3(a, b) {}
console.log(test3()); // we get undefined

console.log("#####################################");

var func;

function print() {
    if (typeof func === 'function') {
        func();
    }
}
print();

func = function () {
    console.log('now i am a function');
};
print();

// call it in diff ways
function fn() {
    console.log('function as a function name');
}
var fn1 = function () {
    console.log('function as function variable name');
}
fn();
console.log(typeof fn);

console.log("#######################") 
console.log("Anonymous functions")
console.log("#######################") 

function test() {
    return 2 + 3;
}
console.log(test);
console.log(test());