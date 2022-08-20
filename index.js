let splitleft=document.querySelector(".left");
let splitright=document.querySelector(".right");
let container=document.querySelector(".container")


splitleft.addEventListener("mouseenter",()=>{

    container.classList.add("active-left")
})

splitright.addEventListener("mouseenter",()=>{

    container.classList.add("active-right")
})

splitleft.addEventListener("mouseleave",()=>{

    container.classList.remove("active-left")
})

splitright.addEventListener("mouseleave",()=>{

    container.classList.remove("active-right")
})