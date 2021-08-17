
let buttonValue;
let probs = document.getElementById("containerProbs");
let form = document.getElementById("containerForm");
let thx = document.getElementById("thksTag");

let inputName = document.getElementById("inputName");
let inputLastname = document.getElementById("inputLastname");
let inputCity = document.getElementById("inputCity");
let inputGender = document.getElementById("genderTag");
let message = document.getElementById("messageTag");
let submit = document.getElementById("submitTag");
let errorStock1 = 0;
let errorStock2 = 0;
let errorStock3 = 0;
let errorNumber1 = 0;
let errorNumber2 = 0;
let errorNumber3 = 0;

const buttons = document.querySelectorAll(".buttonProb");
buttons.forEach((btn) => {
    btn.addEventListener("click", checkButton);
});

function checkButton(event) {
    buttonValue = event.target.innerText;
    probs.setAttribute("style", "transform: translateY(-100%)");
    setTimeout(() => {
        form.setAttribute("style", "transform: translateY(0)");
        probs.setAttribute("style", "display: none");
    }, 600);
}


submit.addEventListener("click", () => {
    checkInputName();
    checkInputLastname();
    checkInputCity();
    if(errorStock1 != 0 || errorStock2 != 0 || errorStock3 != 0) {
        displayErrorEmpty();
    } else if (errorNumber1 != 0 || errorNumber2 != 0 || errorNumber3 != 0) {
        displayErrorNumber();
    } else {
        writeSum();
        value();
        form.setAttribute("style", "transform: translateY(-200%)");
        setTimeout(() => {
            thx.setAttribute("style", "transform: translateY(0)");
            form.setAttribute("style", "display: none");
        }, 600);
    }
})

function writeSum() {
    document.getElementById("probsSum").innerHTML = "<span class='redText'>Your problems: </span>" + buttonValue;
    document.getElementById("lastnameSum").innerHTML = "<span class='redText'>Lastname: </span>" + inputLastname.value;
    document.getElementById("nameSum").innerHTML = "<span class='redText'>Name: </span>" + inputName.value;
    document.getElementById("citySum").innerHTML = "<span class='redText'>City: </span>" + inputCity.value;
    document.getElementById("messageSum").innerHTML = "<span class='redText'>Resume of your message: </span>" + message.value;
}

function checkInputName() {
    errorStock1 = 0;
    errorNumber1 = 0;
    const str = inputName.value;
    const regex = /\d/;
    const checkNumberName = regex.test(str);
    if(checkNumberName === true) {
        errorNumber1++;
    } if (inputName.value === "") {
        errorStock1++;
    }
}
function checkInputLastname() {
    errorStock2 = 0;
    errorNumber2 = 0;
    const str = inputLastname.value;
    const regex = /\d/;
    const checkNumberLastname = regex.test(str);
    if(checkNumberLastname === true) {
        errorNumber2++;
    } if (inputLastname.value === "") {
        errorStock2++;
    }
}
function checkInputCity() {
    errorStock3 = 0;
    errorNumber3 = 0;
    const str = inputCity.value;
    const regex = /\d/;
    const checkNumberCity = regex.test(str);
    if(checkNumberCity === true) {
        errorNumber3++;
    } if (inputCity.value === "") {
        errorStock3++;
    }
}

function displayErrorEmpty() {
    if(errorStock1 != 0) {
        document.getElementById("errorName").setAttribute("style", "display: block");
        document.getElementById("errorName").innerHTML = "* Please enter your name";
    } if (errorStock2 != 0){  
        document.getElementById("errorLastname").setAttribute("style", "display: block");
        document.getElementById("errorLastname").innerHTML = "* Please enter your Lastname";
    } if (errorStock3 != 0) { 
        document.getElementById("errorCity").setAttribute("style", "display: block");
        document.getElementById("errorCity").innerHTML = "* Please enter your city";
    }
}
function displayErrorNumber() {
    if(errorNumber1 != 0) {
        document.getElementById("errorName").setAttribute("style", "display: block");
        document.getElementById("errorName").innerHTML = "* Name can't contain number";
    } if (errorNumber2 != 0){    
        document.getElementById("errorLastname").setAttribute("style", "display: block");
        document.getElementById("errorLastname").innerHTML = "* Lastname can't contain number";
    } if (errorNumber3 != 0) {   
        document.getElementById("errorCity").setAttribute("style", "display: block");
        document.getElementById("errorCity").innerHTML = "* City can't contain number";
    }
}




function value() {
    console.log(buttonValue);
    console.log(inputLastname.value);
    console.log(inputName.value);
    console.log(inputCity.value);
    console.log(message.value);
}
