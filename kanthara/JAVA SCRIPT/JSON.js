window.fetch("https://api.github.com/user").then(x=>x.json()).then(y=>console.log(y)).catch((err)={err})


let jobj={
    id:201,
    name:"abcd",
    place:"bangalore",
    food:"biriyani"
}
console.log(jobj);

let v=JSON.stringify(jobj)
console.log(v);

let v1=JSON.parse(v)
console.log(v1);