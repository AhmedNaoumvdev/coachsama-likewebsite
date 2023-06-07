let button = document.getElementById("humberger");
let menu = document.querySelector(".notopened");
let page = document.querySelector(".mainbody");
let closebtn = document.getElementById("close");
// let photo = [".slide", ".slide.active", ".slide"];
let photo = document.getElementsByClassName("slide");
let index = 0;

function slide(){
    let arr = Array.from(photo);
    // console.log(arr);
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
// slide();
    // map(function(e,index){
    //     if(e.classList.contains("active")){
    //         e.classList.remove("active");
    //         // index += 1;
    //         if(index+1 > photo.length){
    //             // index = 0;
    //             photo[0].classList.add("active");
    //         }else{
    //             console.log(index);
    //             photo[index+1].classList.add("active");
    //         }
    //         // }else{
    //         //     e.classList.add("active");
    //         // }
    //     // console.log(photo[index]);
    //     }
    // })
// console.log(photo[indexx]);
// function slide(){
//     let el = document.querySelector(photo[indexactive]);
//     if(el.classList.contains("active")){
//         el.classList.remove("active");
//         if(indexactive > photo.length){
//             indexactive = 0;
//             document.querySelector(photo[indexactive]).classList.add("active")
//         }else{
//             document.querySelector(photo[indexactive+1]).classList.add("active")
//         }
//     }else{
//         indexactive += 1;
//         return slide()
//     }
// }

// setInterval(slide,2000);
// console.log(photo[0]);
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
