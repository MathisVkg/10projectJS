

let button = document.getElementById("eventTarget");
let navTag = document.getElementById("navTarget");
let navTag2 = document.getElementById("navTarget2");
let navTag3 = document.getElementById("navTarget3");
let buttonClose = document.getElementById("closeTarget");


button.addEventListener("click", () =>{
    navTag.setAttribute("style", "transform: translateX(0);")
    navTag2.setAttribute("style", "transform: translateX(0);")
    navTag3.setAttribute("style", "transform: translateX(0);")
})

buttonClose.addEventListener("click", () =>{
    navTag.setAttribute("style", "transform: translateX(-100%);")
    navTag2.setAttribute("style", "transform: translateX(-100%);")
    navTag3.setAttribute("style", "transform: translateX(-100%);")
})