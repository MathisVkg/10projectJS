
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const alphabetSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]()/\'`~,;:<>^!%|-_1234567890#@";


const reducer = (accumulateur, currentvalue) => accumulateur + currentvalue;
let selectLenght = document.getElementById("selectLenght");
let selectCharac = document.getElementById("selectCharacter");
let submit = document.getElementById("submit");
let valueLenght;

submit.addEventListener("click", () => {
    valueLenght = this.selectLenght.value;
    valueCharac = this.selectCharacter.value;
    checkOption();
})


function checkOption () {
    if(valueCharac === "yes") {
        option1();
    } else if(valueCharac === "no") {
        option2();      
    }
}

let stockMdp1 = [];
function option1() {
    stockMdp1 = [];
    for(let i = 0; i < valueLenght; i++) {
        let randomCharac = alphabetSpecial[Math.floor(Math.random() * alphabetSpecial.length)];
        stockMdp1.push(randomCharac);
    }
    document.getElementById("passGenerate").innerHTML = stockMdp1.reduce(reducer);
}


let stockMdp2 = [];
function option2() {
    stockMdp2 = [];
    for(let i = 0; i < valueLenght; i++) {
        let randomCharac = alphabet[Math.floor(Math.random() * alphabet.length)];
        stockMdp2.push(randomCharac);
    }
    document.getElementById("passGenerate").innerHTML = stockMdp2.reduce(reducer);
}