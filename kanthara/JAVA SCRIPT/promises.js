let vish=new Promise((resolve,reject)=>{
    let name="vishu";
    if(name=="visu")
    {
        resolve(name);
    }else{
        reject("the name is not correct")
    }
})
vish.then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise finished");
})

let chotu=new Promise((resolve,reject)=>{
    let age=33;
    if(age==32){
        resolve (age);
    }else{
        reject ("age is not matched");
    }
})
chotu.then((age)=>{
    console.log(age);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise finished");
})

// async and await

let choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("enter the choice"));
        },3000)
    })
};

async function kitchen(){   //it start execution from here
    console.log("tomato");
    console.log("potato");
    await choice();         //here choice function start execution
    console.log("palak");
    console.log("water");
}
kitchen();

// function z(){
//     let b=10;
//     console.log(b);
// }
// z();
// let d=20;
// var c=30;
// console.log(d);
// console.log(c);
// function y(){
//     var s= 120;
//     console.log(s);
// }
// y();