


let numberExeTag = document.getElementById('numberExe');
let numberRoundTag = document.getElementById('numberRound');
let cancelTag = document.getElementById('cancelTag');
let volumeOnTag = document.getElementById('volumeOn');
let volumeOffTag = document.getElementById('volumeOff');
let buttonPlayTag = document.getElementById('playButton');
let buttonPauseTag = document.getElementById('pauseButton');
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
    console.log('roundValue.value: ', roundValue.value);
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