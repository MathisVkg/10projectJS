


let workValue = document.getElementById("workTimeSelect");
let restValue = document.getElementById("restTimeSelect");
let exeValue = document.getElementById("exeNumberSelect");
let roundValue = document.getElementById("roundNumberSelect");
let timerAll = document.getElementById("timer");
let button = document.getElementById("startButton");
let moduloWork;
let moduloRest;
let resultWork;
let resultRest;
let resultAllRest;
let resultAllWork;
let stockModulo;
let stockResult;

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
    document.querySelector(".roundNumber").innerHTML = roundValue.value + 'X';
})

button.addEventListener("click", () =>{
    countAllTime();
})

function checkRest() {
    if(restValue.value * exeValue.value > 60) {
        moduloRest = (restValue.value * exeValue.value) % 60;
        resultRest = (restValue.value * exeValue.value - moduloRest) / 60;
        // resultAllRest = resultRest + ':' + moduloRest;
    } else {
        resultRest = restValue.value * exeValue.value;
    }
}

function checkWork() {
    if(workValue.value * exeValue.value > 60) {
        moduloWork = (workValue.value * exeValue.value) % 60;
        resultWork = (workValue.value * exeValue.value - moduloWork) / 60;
        // resultAllWork = '0'+ resultWork + ':' + moduloWork;
    } else {
        resultWork = workValue.value * exeValue.value;
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
    } else {
        stockModulo = '00';
        console.log('stockModulo3: ', stockModulo);
    }
    timerAll.innerText = '0' + stockResult + ':' + stockModulo;
    console.log('all: ' ,stockResult + ':' + stockModulo);
}