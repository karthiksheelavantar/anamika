let btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    let ip1=document.querySelector("#ip1").value
    let ttl1=10*ip1;

    let dis1=document.querySelector("#vv1")
    dis1.innerHTML=`Your Total Amount Is ${ttl1} Rs!!!`
})

let btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    let ip2=document.querySelector("#ip2").value
    let ttl2=15*ip2;

    let dis2=document.querySelector("#vv1")
    dis2.innerHTML=`Your Total Amount Is ${ttl2} Rs!!!`
})
let btn3=document.getElementById("btn3")
btn3.addEventListener("click",()=>{
    let ip3=document.querySelector("#ip3").value
    let ttl3=30*ip3;

    let dis3=document.querySelector("#vv1")
    dis3.innerHTML=`Your Total Amount Is ${ttl3} Rs!!!`
})
let booknow=document.getElementById("booknow")
booknow.addEventListener("click",()=>{
    
    confirm("Confirm ride")
    alert("Your request has been proceeded so please wait until we find a captain")

})