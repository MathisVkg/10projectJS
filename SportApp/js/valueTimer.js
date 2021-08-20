


let numberExeTag = document.getElementById('numberExe');
let numberRoundTag = document.getElementById('numberRound');
let cancelTag = document.getElementById('cancelTag');
let volumeOnTag = document.getElementById('volumeOn');
let volumeOffTag = document.getElementById('volumeOff');
let buttonPlayTag = document.getElementById('playButton');
let buttonPauseTag = document.getElementById('pauseButton');
let timerTarget = document.getElementById('timerTarget');
let textTarget = document.getElementById('stadeTarget');
let exeStock = 1;
let roundStock = 1;





cancelTag.addEventListener('click', () =>{
    stopTimer();
})

volumeOnTag.addEventListener('click', () =>{
    volumeOnTag.setAttribute('style', 'display: none');
    volumeOffTag.setAttribute('style', 'display: block; width: 20px');
})
volumeOffTag.addEventListener('click', () =>{
    volumeOnTag.setAttribute('style', 'display: block; width: 20px');
    volumeOffTag.setAttribute('style', 'display: none');
})

buttonPlayTag.addEventListener('click', () =>{
    buttonPlayTag.setAttribute('style', 'display: none');
    buttonPauseTag.setAttribute('style', 'display: block; width: 35px');
})
buttonPauseTag.addEventListener('click', () =>{
    buttonPlayTag.setAttribute('style', 'display: block; width: 35px');
    buttonPauseTag.setAttribute('style', 'display: none;');
})

function writeData(){
    numberExeTag.innerHTML = exeStock + '/' + exeValue.value;
    if(roundValue.value == 1){
        numberRoundTag.setAttribute('style', 'display: none');
        document.querySelector('.roundTimer').setAttribute('style', 'display: block; width: 20px');
    } else {
        numberRoundTag.innerHTML = roundStock + '/' + roundValue.value;
    }
}

function stopTimer(){
    document.querySelector('h2').setAttribute('style','display: block');
    timerAll.setAttribute('style','display: block');
    button.setAttribute('style', 'display: block');
    workTarget.setAttribute("style", "display: flex; height: 51px");
    restTarget.setAttribute("style", "display: flex; height: 51px");
    exeTarget.setAttribute("style", "display: flex; height: 51px");
    roundTarget.setAttribute("style", "display: flex; height: 51px");
    document.querySelector('.containerSelect').setAttribute('style','height: 270px; margin-top: 15px; background-color: #ffffff');
    document.querySelector('.timerApp').setAttribute('style', 'display: none');
    clearInterval(intervalTimer);
}

function writeBegin(){
    document.querySelector('.containerSelect').setAttribute('style','height: 535px; margin-top: -25px; background-color: #e47a23');
    let beginValue = 10;
    timerTarget.innerHTML = '00:' + beginValue;
    textTarget.innerHTML = 'Get ready';
    let intervalBegin = setInterval(() => {
        beginValue--;
        if(beginValue == 0){
            clearInterval(intervalBegin);
            writeWork();
        }
        if(beginValue < 10){
            beginValue = '0' + beginValue;
        }
        timerTarget.innerHTML = '00:' + beginValue;
    }, 1000);
}

function writeRest(){
    document.querySelector('.containerSelect').setAttribute('style','height: 535px; margin-top: -25px; background-color: #ca3737');
    // timerTarget.innerHTML = '00:' + stockRest;
    textTarget.innerHTML = 'Rest';
    let i = stockRest;
    exeStock++;
    numberExeTag.innerHTML = exeStock + '/' + exeValue.value;
    let intervalRest = setInterval(() => {
        stockRest--;
        if(exeStock == exeValue.value && stockRest == 0){
            clearInterval(intervalRest);
            clearInterval(intervalWork);
            timerTarget.innerHTML = '00:00';
        }
        if(stockRest == 0){
            writeWork();
            stockRest = i;
            clearInterval(intervalRest);
        }
        if(stockRest < 10){
            stockRest = '0' + stockRest;
        }
        timerTarget.innerHTML = '00:' + stockRest;
    }, 1000);
}

function writeWork(){
    document.querySelector('.containerSelect').setAttribute('style','height: 535px; margin-top: -25px; background-color: #49e67d');
    // timerTarget.innerHTML = '00:' + stockTimer;
    textTarget.innerHTML = 'Work';
    let i = stockTimer;
    let intervalWork = setInterval(() => {
        stockTimer--;
        if(stockTimer == 0){
            writeRest();
            stockTimer = i;
            clearInterval(intervalWork);
        }
        if(stockTimer < 10){
            stockTimer = '0' + stockTimer;
        }
        timerTarget.innerHTML = '00:' + stockTimer;
    }, 1000);
}