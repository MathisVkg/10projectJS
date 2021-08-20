


let workTag = document.getElementById("workId");
let restTag = document.getElementById("restId");
let exeTag = document.getElementById("exeId");
let roundTag = document.getElementById("roundId");
let playButton = document.getElementById("startButton");

let workTarget = document.getElementById("workTarget");
let restTarget = document.getElementById("restTarget");
let exeTarget = document.getElementById("exeTarget");
let roundTarget = document.getElementById("roundTarget");



playButton.addEventListener("click", () =>{

})

workTag.addEventListener("click", () =>{
    if(workTarget.getBoundingClientRect().height < 55) {
        workTarget.setAttribute("style", "height: 270px");
        // document.querySelector(".arrowButton1").setAttribute("style", "transform: rotate(180deg)");
        restTarget.setAttribute("style", "display: none");
        exeTarget.setAttribute("style", "display: none");
        roundTarget.setAttribute("style", "display: none");
    }  else {
        workTarget.setAttribute("style", "height: 51px");
        // document.querySelector(".arrowButton1").setAttribute("style", "transform: rotate(0deg)");
        setTimeout(() => {
            restTarget.setAttribute("style", "display: flex; height: 51px;");
            exeTarget.setAttribute("style", "display: flex; height: 51px;");
            roundTarget.setAttribute("style", "display: flex; height: 51px;");
        }, 350);
    }
})
restTag.addEventListener("click", () =>{
    if(restTarget.getBoundingClientRect().height < 55) {
        restTarget.setAttribute("style", "height: 270px");
        // restTag.setAttribute("style", "transform: rotate(180deg)");
        workTarget.setAttribute("style", "display: none");
        exeTarget.setAttribute("style", "display: none");
        roundTarget.setAttribute("style", "display: none");
    }  else {
        restTarget.setAttribute("style", "height: 51px");
        // restTag.setAttribute("style", "transform: rotate(0deg)");
        setTimeout(() => {
            workTarget.setAttribute("style", "display: flex; height: 51px;");
            exeTarget.setAttribute("style", "display: flex; height: 51px;");
            roundTarget.setAttribute("style", "display: flex; height: 51px;");
        }, 350);
    }
})
exeTag.addEventListener("click", () =>{
    if(exeTarget.getBoundingClientRect().height < 55) {
        exeTarget.setAttribute("style", "height: 270px");
        // exeTag.setAttribute("style", "transform: rotate(180deg)");
        restTarget.setAttribute("style", "display: none");
        workTarget.setAttribute("style", "display: none");
        roundTarget.setAttribute("style", "display: none");
    }  else {
        exeTarget.setAttribute("style", "height: 51px");
        // exeTag.setAttribute("style", "transform: rotate(0deg)");
        setTimeout(() => {
            restTarget.setAttribute("style", "display: flex; height: 51px;");
            workTarget.setAttribute("style", "display: flex; height: 51px;");
            roundTarget.setAttribute("style", "display: flex; height: 51px;");
        }, 350);
    }
})
roundTag.addEventListener("click", () =>{
    if(roundTarget.getBoundingClientRect().height < 55) {
        roundTarget.setAttribute("style", "height: 270px");
        // roundTag.setAttribute("style", "transform: rotate(180deg)");
        restTarget.setAttribute("style", "display: none");
        exeTarget.setAttribute("style", "display: none");
        workTarget.setAttribute("style", "display: none");
    }  else {
        roundTarget.setAttribute("style", "height: 51px");
        // roundTag.setAttribute("style", "transform: rotate(0deg)");
        setTimeout(() => {
            restTarget.setAttribute("style", "display: flex; height: 51px;");
            exeTarget.setAttribute("style", "display: flex; height: 51px;");
            workTarget.setAttribute("style", "display: flex; height: 51px;");
        }, 350);
    }
})