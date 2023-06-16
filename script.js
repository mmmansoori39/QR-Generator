let btn= document.querySelector("#btn")
let inp= document.querySelector("#inp")
let box= document.querySelector(".box")
let active= document.querySelector(".box div")
let img= document.querySelector(".box div img")

btn.addEventListener('click', function(){
    let inpval= inp.value
    if (!inpval) return;
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpval}`;
    img.addEventListener('load', function(){
        active.classList.add('active')
        box.classList.add('height')
        inp.value='';
    })
})