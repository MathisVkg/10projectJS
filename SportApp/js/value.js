


let workValue = document.getElementById("workTimeSelect");
let restValue = document.getElementById("restTimeSelect");
let exeValue = document.getElementById("exeNumberSelect");
let roundValue = document.getElementById("roundNumberSelect");
let timerAll = document.getElementById("timer");
let button = document.getElementById("startButton");
let timerAllTarget = document.getElementById("timerAll");
let moduloWork;
let moduloRest;
let resultWork;
let resultRest;
let stockModulo;
let stockResult = 0;
let stockTimer;
let stockRest;


workValue.addEventListener("click", () =>{
    countAllTime();
    if(workValue.value < 60) {
        document.querySelector(".workTimer").innerHTML = '00:' + workValue.value;
    } else {
        document.querySelector(".workTimer").innerHTML = '01:00';
    }
})
restValue.addEventListener("click", () =>{
    countAllTime();
    if(restValue.value < 60) {
        document.querySelector(".restTimer").innerHTML = '00:' + restValue.value;
    } else {
        document.querySelector(".restTimer").innerHTML = '01:00';
    }
})
exeValue.addEventListener("click", () =>{
    countAllTime();
    document.querySelector(".exeNumber").innerHTML = exeValue.value;
})
roundValue.addEventListener("click", () =>{
    countAllTime();
    document.querySelector(".roundNumber").innerHTML = roundValue.value + 'X';
})

button.addEventListener("click", () =>{
    stockTimer = workValue.value;
    stockRest = restValue.value;
    startInterval();
    setAppTimer();
    writeData();
    writeBegin();
})

function checkRest() {
    if(restValue.value * exeValue.value > 60) {
        moduloRest = (restValue.value * exeValue.value) % 60;
        resultRest = (restValue.value * exeValue.value - moduloRest) / 60;
    } else {
        resultRest = 0;
        moduloRest = restValue.value * exeValue.value;
    }
}

function checkWork() {
    if(workValue.value * exeValue.value > 60) {
        moduloWork = (workValue.value * exeValue.value) % 60;
        resultWork = (workValue.value * exeValue.value - moduloWork) / 60;
    } else {
        resultWork = 0;
        moduloWork = workValue.value * exeValue.value;
    }
}


function countAllTime() {
    checkRest();
    checkWork();
    stockModulo = moduloRest + moduloWork;
    stockResult = resultWork + resultRest;
    if(stockModulo > 60){
        stockModulo = stockModulo % 60;
        stockResult++;
    } 
    if (stockModulo === 60){ 
        stockModulo = 30;
    }
    if(stockModulo === 0){
        stockModulo = 30;
        stockResult--;
    }
    stockResult = stockResult * roundValue.value;
    if(stockResult >= 10){
        timerAll.innerText = stockResult + ':' + stockModulo;
    } else {
        timerAll.innerText = '0' + stockResult + ':' + stockModulo;
    }
}

function startInterval(){
    let intervalTimer = setInterval(() => {
        stockModulo--;
        if(stockResult == 0 && stockModulo == 0){
            timerAllTarget.innerText = 'Rest Time: ' + '00:00';
            clearInterval(intervalTimer);
        }
        if(stockModulo < 10){
            stockModulo = '0' + stockModulo;
        }
        if(stockModulo === '00' && stockResult > 0){
            stockResult--;
            stockModulo = 59;
        }
        timerAllTarget.innerText = 'Rest Time: ' + '0' + stockResult + ':' + stockModulo;
    }, 1000);
}

function setAppTimer() {
    document.querySelector('h2').setAttribute('style','display: none');
    timerAll.setAttribute('style','display: none');
    button.setAttribute('style', 'display: none');
    workTarget.setAttribute("style", "display: none");
    restTarget.setAttribute("style", "display: none");
    exeTarget.setAttribute("style", "display: none");
    roundTarget.setAttribute("style", "display: none");
    document.querySelector('.containerSelect').setAttribute('style','height: 535px; margin-top: -25px; background-color: #ca3737');
    document.querySelector('.timerApp').setAttribute('style', 'display: flex');
}