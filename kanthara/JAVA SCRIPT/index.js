// VAR KEYWORD
var a
a=2;
var a='a'
console.log(a);
var a
a=3
var a=9;
console.log(a);
console.log("*************************");
// LET KEYWORD
let b;
b=10;
b=69;
let c=4;
console.log(b);
console.log(c);
console.log("*************************");
// CONST KEYWORD
// const c;
c=2;
const d=1;
// const c;
c=3;
// const c=3;
console.log(c);
console.log("*************************");
// HOISTING
console.log(z);
var z=55;

// *******************
try {
    console.log(x);
let x=35
} catch (error) {
    console.log("handled.....");
}


// *********************
try {
    console.log(y);
const y=55
} catch (error) {
    console.log("caught....");
}


// *****************
console.log(z);
var z=55;