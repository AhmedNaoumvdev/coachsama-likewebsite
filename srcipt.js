let button = document.getElementById("humberger");
let menu = document.querySelector(".notopened");
let page = document.querySelector(".mainbody");
let closebtn = document.getElementById("close");
let photo = document.getElementsByClassName("slide");
let index = 0;

function slide(){
    let arr = Array.from(photo);
    switch (index) {
        case 0:
            if(arr[0].classList.contains("active")){
                arr[0].classList.remove("active");
                arr[1].classList.add("active");
                index = 1;
            }
            break;
        case 1:
            if(arr[1].classList.contains("active")){
                arr[1].classList.remove("active");
                arr[2].classList.add("active");
                index = 2;
            }
            break;
        case 2:
            if(arr[2].classList.contains("active")){
                arr[2].classList.remove("active");
                arr[0].classList.add("active");
                index = 0;
            }
            break;
    
        default:
            break;
    }
}
setInterval(slide,5000)

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
