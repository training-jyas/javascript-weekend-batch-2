var var1 = 'Marathahalli';
var var2 = 123;
var var3 = true;
var var4 = {};
var var5;
var var6 = null;
var var7 = NaN;
var var8 = [];
var var9 = function () {};

// toNumber(), toBoolean() - implicit method which js uses in == comparison

console.log('\n-------------\nstring comparison with string\n-------------------');
if (var1 == 'Marathahalli') {
    console.log('strings are equal');
} else {
    console.log('strings are not equal');
}

console.log('\n-------------\nnumber comparison with number\n-------------------');
if (var2 == 123) {
    console.log('var2 is 123');
}

console.log('\n-------------\nnumber comparison with string\n-------------------');
var var10 = '123';
if (var2 == var10) {
    console.log('var2 is 123');
}
if (var2 === var10) {
    console.log('var2 is strict equal with var10');
} else {
    console.log('var2 is strict not equal with var10');
}
if (var2 == 'a123') {
    console.log('string is a123');
}

console.log('\n-------------\nundefined == null\n-------------------');
if (var5 == var6) {
    console.log('undefined is == null');
}
if (false == false) {
    console.log('false == false');
}
if (var5 === var6) {
    console.log('undefined is === null');
} else {
    console.log('undefined is !== null');
}
// how the if condition in line 46 is read by JS
if(typeof var5 == typeof var6 && var5 == var6){
    console.log('var5 is === var6');
}

// var xyz = null;
// if (xyz != undefined) {
//     console.log('do something');
// }