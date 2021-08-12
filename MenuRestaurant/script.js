

// console.log(entry);
// console.log(dishe);
// console.log(desserts);
let allTarget = document.getElementById("allTarget");
let buttonMenu = document.getElementById("menuTag");
let buttonEntry = document.getElementById("entryTag");
let buttonDishe = document.getElementById("disheTag");
let buttonDessert = document.getElementById("dessertTag");


let card;
let cardName;
let cardInfo;

buttonMenu.addEventListener("click", () => {
    allMenu();
})
buttonEntry.addEventListener("click", () => {
    searchEntry();
})
buttonDishe.addEventListener("click", () => {
    searchDishe();
})
buttonDessert.addEventListener("click", () => {
    searchDessert();
})

function allMenu() {
    for(let i = 0; i < dishe.length; i++) {
        document.getElementById("dishe" + i).setAttribute("style", "display: block")
    }
    for(let i = 0; i < desserts.length; i++) {
        document.getElementById("dessert" + i).setAttribute("style", "display: block")
    }
    for(let i = 0; i < entry.length; i++) {
        document.getElementById("entry" + i).setAttribute("style", "display: block")
    }
}

function searchEntry() {
    for(let i = 0; i < entry.length; i++) {
        document.getElementById("entry" + i).setAttribute("style", "display: block")
    }
    for(let i = 0; i < dishe.length; i++) {
        document.getElementById("dishe" + i).setAttribute("style", "display: none")
    }
    for(let i = 0; i < desserts.length; i++) {
        document.getElementById("dessert" + i).setAttribute("style", "display: none")
    }
}
function searchDishe() {
    for(let i = 0; i < dishe.length; i++) {
        document.getElementById("dishe" + i).setAttribute("style", "display: block")
    }
    for(let i = 0; i < entry.length; i++) {
        document.getElementById("entry" + i).setAttribute("style", "display: none")
    }
    for(let i = 0; i < desserts.length; i++) {
        document.getElementById("dessert" + i).setAttribute("style", "display: none")
    }
}
function searchDessert() {
    for(let i = 0; i < desserts.length; i++) {
        document.getElementById("dessert" + i).setAttribute("style", "display: block")
    }
    for(let i = 0; i < dishe.length; i++) {
        document.getElementById("dishe" + i).setAttribute("style", "display: none")
    }
    for(let i = 0; i < entry.length; i++) {
        document.getElementById("entry" + i).setAttribute("style", "display: none")
    }
}



function getEntry() {
    for(let i = 0; i < entry.length; i++) {
        card = document.createElement("div")
        card.classList.add("cardEntry");
        card.setAttribute("id", "entry" + i);
        
        cardName = document.createElement("h2");
        cardName.classList.add("cardName");
        cardName.innerHTML = entry[i];
        
        cardInfo = document.createElement("p");
        cardInfo.classList.add("cardInfo");
        cardInfo.innerHTML = price1[i];

        cardImg = document.createElement("img");
        cardImg.classList.add("cardImg");
        cardImg.src = img1[i];

        card.appendChild(cardImg);
        card.appendChild(cardName);
        card.appendChild(cardInfo);
        allTarget.appendChild(card);
    }       
}

function getDishe() {
    for(let i = 0; i < dishe.length; i++) {
        card = document.createElement("div")
        card.classList.add("cardEntry");
        card.setAttribute("id", "dishe" + i);
        
        cardName = document.createElement("h2");
        cardName.classList.add("cardName");
        cardName.innerHTML = dishe[i];
        
        cardInfo = document.createElement("p");
        cardInfo.classList.add("cardInfo");
        cardInfo.innerHTML = price2[i];

        cardImg = document.createElement("img");
        cardImg.classList.add("cardImg");
        cardImg.src = img2[i];

        card.appendChild(cardImg);
        card.appendChild(cardName);
        card.appendChild(cardInfo);
        allTarget.appendChild(card);
    }  
}

function getDessert() {
    for(let i = 0; i < desserts.length; i++) {
        card = document.createElement("div")
        card.classList.add("cardEntry");
        card.setAttribute("id", "dessert"+ i);
        
        cardName = document.createElement("h2");
        cardName.classList.add("cardName");
        cardName.innerHTML = desserts[i];
        
        cardInfo = document.createElement("p");
        cardInfo.classList.add("cardInfo");
        cardInfo.innerHTML = price3[i];

        cardImg = document.createElement("img");
        cardImg.classList.add("cardImg");
        cardImg.src = img3[i];

        card.appendChild(cardImg);
        card.appendChild(cardName);
        card.appendChild(cardInfo);
        allTarget.appendChild(card);
    } 
}


getEntry();
getDishe();
getDessert();