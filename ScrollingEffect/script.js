


let navMedia = document.getElementById("navTarget");
let barMedia = document.getElementById("barTargetMedia");

let check = 0;
barMedia.addEventListener("click", () => {
    barMedia.setAttribute("style", "transform: rotate(90deg)")
    navMedia.setAttribute("style", "transform: translateY(0);");
    check++;
    if(check === 2) {
        barMedia.setAttribute("style", "transform: rotate(0deg)")
        navMedia.setAttribute("style", "transform: translateY(-140%);");
        check = 0;
    }
})


window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
})