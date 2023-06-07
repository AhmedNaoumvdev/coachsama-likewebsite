let button = document.getElementById("humberger");
let menu = document.querySelector(".notopened");
let page = document.querySelector(".mainbody");
let closebtn = document.getElementById("close");

button.addEventListener("click", ()=>{
    menu.classList.toggle("opned");
    page.classList.toggle("openmainbody");
    document.body.classList.toggle("stopscrolling");
});

closebtn.addEventListener("click", ()=>{
    menu.classList.toggle("opned");
    page.classList.toggle("openmainbody");
    document.body.classList.toggle("stopscrolling");
})

// page.onclick = ()=>{
//     if(!menu.classList.contains("opned")){
//         menu.classList.toggle("opned");
//         page.classList.toggle("openmainbody");
//         document.body.classList.toggle("stopscrolling");
//     }
// }