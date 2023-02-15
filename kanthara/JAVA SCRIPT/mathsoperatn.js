function hof(x,y,task){
    a=task(x,y);
    return a;
}
// addition
let add=hof(20,40,function (x,y) {
    return x+y;
})
console.log(add);
// substraction
let sub=hof(20,40,function (x,y) {
    return x-y;
})
console.log(sub);
// multiplication
let mul=hof(20,40,function (x,y) {
    return x*y;
})
console.log(mul);
// division
let div=hof(20,40,function (x,y) {
    return x/y;
})
console.log(div);
// modulus
let mod=hof(20,40,function (x,y) {
    return x%y;
})
console.log(mod);

// a-synchronized
console.log("statement 1");
setTimeout(function () {
    console.log("statement 2");
},5000)//it will take 5sec to execute

setTimeout(function(){
    console.log("statement 3");
},3000)//it will take 3sec to execute