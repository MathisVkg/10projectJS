

let button = document.getElementById("eventTarget");
let navTag = document.getElementById("navTarget");
let navTag2 = document.getElementById("navTarget2");
let navTag3 = document.getElementById("navTarget3");
let buttonClose = document.getElementById("closeTarget");
let checkButton = 0;


button.addEventListener("click", () =>{
    navTag.setAttribute("style", "transform: translateX(0);")
    navTag2.setAttribute("style", "transform: translateX(0);")
    navTag3.setAttribute("style", "transform: translateX(0);")
    console.log("check");
})

buttonClose.addEventListener("click", () =>{
    navTag.setAttribute("style", "transform: translateX(-100%);")
    navTag2.setAttribute("style", "transform: translateX(-100%);")
    navTag3.setAttribute("style", "transform: translateX(-100%);")
    console.log("check");
})