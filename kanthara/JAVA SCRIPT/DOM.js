// let element=document.getElementById('demo')
// console.log(element);

// let element1=document.getElementById('demo').innerHTML="my class"
// console.log(element1);

// let element3=document.getElementsByClassName('test')
// console.log(element3);

// let element4=document.getElementsByClassName('test').innerHTML="students"
// console.log(element4);

//dom methods
//1. get element by id

// let d=document.getElementById('demo').style.background="purple";
// document.write(d);

// let ele=document.createElement('h2');
// console.log(ele);
// ele.innerHTML="hello";//to insert the content

// let zoom=document.getElementsByClassName('test');
// console.log(zoom);
// console.log(zoom[2]);//fetching with index number
// console.log(Array.isArray(zoom));//to check array or not

// let cn=document.getElementsByTagName('p');
// console.log(cn);

// let z=document.querySelector('#demo1');//it targets only first one
// console.log(z);

// let y=document.querySelectorAll('#demo1');//it will targets all the elements
// console.log(y);

// DOM elements
// 1st way 
function test(){
    document.body.style.backgroundColor="purple"
}

// 2nd way
let m=document.querySelector('button');
console.log(m);
m.onclick=()=>{
    document.body.style.backgroundColor="black"
}

// 3rd way
let m2=document.getElementById('test1');
m2.addEventListener('click',()=>{
    document.body.style.backgroundColor="pink"

})

// append child (it ll put add element in html file)
let ele=document.createElement('input')
console.log(ele);
document.body.appendChild(ele);

let ele2=document.createElement('span')
console.log(ele2);
ele2.innerHTML="box";
document.body.appendChild(ele2);

let ele3=document.createElement('div')
ele3.setAttribute('id','test');
document.body.appendChild(ele3);

