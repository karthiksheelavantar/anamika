let a=[1,"hello",true,undefined,null,function a(){}]
console.log(a);
console.log(typeof a);
console.log(Array.isArray(a));//it will chech wether it is array or not

//array methods

//push()
let array=[100,200,300,400]
console.log(array.push("500",400));
console.log(array);

//unshift()
let array1=[100,200,300,400]
console.log(array1.unshift("hello",400));
console.log(array1);

//pop()
let array2=[100,200,300,400]
console.log(array2.pop());//it will remove the last element
console.log(array2);

// shift()
let array3=[100,200,300,400]
console.log(array3.shift());//it will remove the first element
console.log(array3);

//slice()
let arr1=[200,400,550,600,700,800]
console.log(arr1.slice(1,4));//includes starting index & excludes ending index
console.log(arr1);

// splice()
let arr2=[200,400,550,600,700,800]
console.log(arr2.splice(1,4,"hello","hii","eeeee"));//includes starting index & excludes ending index
console.log(arr2);

// fill()
let arr3=[200,400,550,600,700,800]
console.log(arr3);
console.log(arr3.fill(6));

// concat()
let arr4=[200,400,550,600,700,800]
let arr5=["hello","hii"]
console.log(arr4.concat(arr5));

// join()
let arr6=[200,400,550,600,700,800]
console.log(arr6.join("+"));//it will join and make a single element

// reverse()
let arr7=[200,400,550,600,700,800]
console.log(arr7.reverse());//it will reverse the element

// include()
let arr8=[200,400,550,600,700,800]
console.log(arr8.includes(550));//it shows where the given element is present or not
