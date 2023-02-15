// object literals
let mb={
    id:101,
    name:"karthik",
    place:"nargund",
    address:{
        city:"bangalore",
        pincode:560010,
        language:{
            state:"kannada"
        }
    }
}
console.log(mb,typeof mb);
console.log(mb.name);
console.log(mb.address.city);
console.log(mb.address.language.state);

// to change the value
let m={
    id:101,
    name:"karthik",
    place:"nargund",
    address:{
        city:"bangalore",
        pincode:560010,
        language:{
            state:"kannada"
        }
    }
}
console.log(m.id=105);
console.log(m.address.city="hubli");
console.log(m);

// to add the another value and key
let k={
    id:101,
    name:"karthik",
    place:"nargund",
    address:{
        city:"bangalore",
        pincode:560010,
        language:{
            state:"kannada"
        }
    }
}
console.log(k.marks=99);
console.log(k);
console.log(k.address.cross="4th");
console.log(k);

// to fetch the data

let v={
    id:101,
    name:"karthik",
    place:"nargund",
    address:function z(){
            let city="bangalore"
                let pincode=560010
        // console.log(city);
        // console.log(pincode);
        return `${city} ${pincode}`//
    }
}
console.log(v.address());

console.log(Math.round(11.5));//it ll display roundfiger number
console.log(Math.ceil(431.8));//it ll display next number
console.log(Math.floor(101.6));//it ll display previous number
console.log(Math.sqrt(4));//it will display sqaure root
console.log(Math.random()*1000);//random num
console.log(Math.ceil((Math.random()*10000).toString(10)));//it will generate the ramdom number like OTP

let v1=Math.ceil(Math.random()*100000).toString(26)
console.log(v1);//capche or otp with alphabetslet 

// DOM
let ranCOL=Math.ceil(Math.random()*1000000).toString(26);
h2=document.querySelector("h2");
console.log(h2);
h2.style.background=`#${ranCOL}`;

// asynchronize 
// setTimeout(()=>{
//     console.log("hiii");
// },2000)
// setTimeout(()=>{
//     console.log("hellooooo");
// },4000)

// synchronize with loop it will repeat until it get comment

// setInterval(()=>{
//     console.log("carazzyyyy");
// },3000)
// setInterval(()=>{
//     console.log("laazzyyyy");
// },6000)

// date

let dt=new Date();
console.log(dt);

console.log(dt.getDate());
console.log(dt.getFullYear());
console.log(dt.getDay());
console.log(dt.getMonth());
console.log(dt.getMilliseconds());
console.log(dt.getMinutes());

//it will display only keys
let kabi={
    id:420,
    name:"abc"
}
console.log(Object.keys(kabi));

//it will display only values
let kabi1={
    id:420,
    name:"abc"
}
console.log(Object.values(kabi1));

//it will display both keys and values
let kabi3={
    id:420,
    name:"abc"
}
console.log(Object.entries(kabi3));

//SEAL METHOD //we can update 
let dekh={
    id:109,
    name:"xyz"
}
console.log(dekh);
console.log(Object.seal(dekh));
dekh.id="101";//we can update the values
console.log(dekh);
dekh.place="hubli";//we cant add new keys or values 
console.log(dekh);

//FREEZE METHOD //we cant update value or we cant add a new key
let n={
    id:111,
    name:"virat"
}
console.log(n);
console.log(Object.freeze(n));
console.log(n.id=999);
console.log(n);
console.log(n.place="nargund");
console.log(n);

// frozen
let n1={
    id:324,
    name:"vishuuu"
}
console.log(n1);
console.log(Object.isFrozen(n1));
console.log(Object.isSealed(n1));
console.log(Object.seal(n1));
console.log(Object.isSealed(n1));//it will check wether it is sealed or not
console.log(Object.freeze(n1));
console.log(Object.isFrozen(n1));//is will chech wether it is freeze or not