// arguments in function
var test = function (a, b) {
    console.log("##########################");
    if (a !== undefined && a !== null && b !== undefined && b !== null) {
        console.log(arguments);
        console.log('a, b : ', a, b);
        console.log('a, b : ', arguments[0], arguments[1]);
        console.log('3rd parameter : ', arguments[2]);
        var divisionResult = a / b;
        console.log("a/b : ", divisionResult);
    }
}

test(10, 20);
test(10);
test(null, 20);
test();

// what if we pass more than the declared arguments
test(10, 20, 30);

function sum() {
    var sum = 0;
    // having the if condition here is a redundant thing. if the arguments array is empty it will not run the for loop in first place
    // if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
    // }
    return sum;
}
console.log("####### sum ########");
console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));