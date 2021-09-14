

let arrowDown = document.getElementById('arrowDown1');
let arrowUp = document.getElementById('arrowUp2');
let cont1 = document.getElementById('cont1');
let cont2 = document.getElementById('cont2');


arrowDown.addEventListener('click', () => {
    cont1.setAttribute("style", "transform: translateY(-120%); margin-top: 0;");
    setTimeout(function(){ cont1.setAttribute('style', 'display:none;'); }, 400);
    setTimeout(function(){ cont2.setAttribute("style", "margin-top: 17%"); }, 405);
});

arrowUp.addEventListener('click', () => {
    cont2.setAttribute("style", "transform: translateY(-120%); margin-top: 0;");
    setTimeout(function(){ cont2.setAttribute('style', 'display:none'); }, 400);
    setTimeout(function(){ cont1.setAttribute("style", "margin-top: 17%"); }, 405);
});