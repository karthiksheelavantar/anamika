// local storage
// setItem(to store value)
localStorage.setItem("name","karthik")
localStorage.setItem("place","nargund")
localStorage.setItem("id","100")

// getItem(to fetch value)
let a=localStorage.getItem("place")
console.log(a);

//it will particular data from LS
localStorage.removeItem("id")

// localStorage.clear()

// storing array into a local storage
let array=["bus","car","train","plane"]
localStorage.setItem("vehicle",JSON.stringify(array))//JSON.STRINGIFY will store in the form of array

let c=localStorage.getItem("vehicle")
console.log(c);

// to fetch the array in array formate
let d=JSON.parse(localStorage.getItem("vehicle"))
console.log(d);


// session storage

// all the methods are same as in local storage