// let form=document.querySelector('form');
// form.addEventListener('submit',e=>{
//     let un=document.getElementById('nn').value;
//     let un1=document.getElementById('nn1').value;
//     e.preventDefault();
//     console.log(un,un1);
// })

// key events

// let key=document.getElementById('demo');
// key.addEventListener('keydown',()=>{
//     console.log('keydown');
// })

// let key1=document.getElementById('demo');
// key1.addEventListener('keyup',()=>{
//     console.log('keyup');
// })

// let key2=document.getElementById('demo');
// key2.addEventListener('keypress',()=>{
//     console.log('keypress');
// })

// let btn1=document.getElementById('demo')
// btn1.addEventListener('keyup',()=>{
//     let rc=Math.floor(Math.random()*10000)
//     console.log(rc);
//     document.body.style.background='#${rc}';
// })

let d=document.querySelector('button');                                                             
d.addEventListener('mouseleave',()=>{
    document.body.style.padding="20px";
    document.body.style.border="5px groove red";
    document.body.style.backgroundColor="yellow";
})