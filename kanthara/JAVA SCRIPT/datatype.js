// String 

let d="pmv";
let d1="pmc1";
let d2=`pmc2`;
console.log(typeof d);
console.log(typeof d1);
console.log(typeof d2);

let d3="'hi'";
let d4='"hello"';
let d5=`good`;
console.log(d3);
console.log(d4);
console.log(d5);

let d6="praveen";
let d7=101;
let d8=100000;
console.log(`${d6} is of id ${d7} earning ${d8}`);

let v1="puneet rajkumar";
console.log(v1.length);//length=16
console.log(v1.endsWith("r"));//true
console.log(v1.startsWith("p"));//true
console.log(v1.charAt(5));//index value 5
console.log(v1.indexOf("e"));//it will take first letter index
console.log(v1.slice(0,7));//it will not include 7th index
let str=v1.split('');//split it into array
console.log(str);
let rev=str.reverse('');//reverse it 
console.log(rev);
let jon=rev.join('');
console.log(jon);

// number
let z1=65.76;
console.log(typeof z1,z1);

let z2=76;
console.log(typeof z2,z2);

let z3=Number("true");
console.log(typeof z3);

// NULL
console.log(typeof null);

// Boolean
let z4=true;
console.log(typeof z4,z4);

console.log(true?"yestrue" : "yesfalse");

// Bigint

let z5=322453643767674n;
console.log(typeof z5,z5);

let z6=BigInt("345647362");
console.log(typeof z6,z6);

let z7=BigInt(463276457);
console.log(typeof z7,z7);

let z8=1n;
console.log(typeof z8,z8);
