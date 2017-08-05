function run() {
    var temp = '123';
    temp2 = '345';
}

run();
console.log('temp2 = ', temp2);// temp2 is created without using the 'var' keyword. so it is availabel globally
console.log('temp = ', temp); // temp variable is created as a local variable for the function run. so it is not available here.

// NOTE :- ALWAYS USE 'var' KEYWORD WHEN YOU DECLARE A VARIABLE