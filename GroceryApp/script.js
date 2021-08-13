

let submit = document.getElementById("submitTag");
let input = document.getElementById("inputTag");
let clear = document.getElementById("clearTag");
let receive = document.getElementById("receiveTag");
let error = document.getElementById("errorTag");
let trashTarget;
let itemGroupTarget;
let itemGroup;
let item;
let edit;
let trash;
let buttonGroup;
let itemNumber = 0;



submit.addEventListener("click", () => {
    if(input.value != "") {
        itemNumber++;
        createItem();
        createButton();
        input.value = "";
        error.innerHTML = "";
    } else {
        error.innerHTML = "Empty fil";
    }
})

clear.addEventListener("click", () => {
    let i;
    for(i = 0; i < itemNumber; i++) {
        clearAll();
        error.innerHTML = "";
    }
    if(i === itemNumber) {
        itemNumber = 0;
    }
})





function createButton() {
    buttonGroup = document.createElement("div");
    buttonGroup.classList.add("buttonGroup");
    trash = document.createElement("img");
    trash.classList.add("listButton");
    trash.setAttribute("id", "trashTag");
    trash.src = "img/trash-alt-solid.svg";

    edit = document.createElement("img");
    edit.classList.add("listButton");
    edit.setAttribute("id", "editTag");
    edit.src = "img/edit-solid.svg";

    buttonGroup.appendChild(edit);
    buttonGroup.appendChild(trash);
    itemGroup.appendChild(buttonGroup);
    trashTarget = document.getElementById("trashTag");
}


function createItem() {
    itemGroup = document.createElement("div");
    item = document.createElement("p");
    itemGroup.classList.add("itemList");
    itemGroup.setAttribute("id", "itemListTag");
    item.classList.add("item");
    item.innerHTML = input.value;

    itemGroup.appendChild(item);
    receive.appendChild(itemGroup);
}


function clearAll() {
    itemGroupTarget = document.getElementById("itemListTag");
    itemGroupTarget.remove();
}
