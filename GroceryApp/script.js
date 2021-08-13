

let submit = document.getElementById("submitTag");
let input = document.getElementById("inputTag");
let clear = document.getElementById("clearTag");
let receive = document.getElementById("receiveTag");
let error = document.getElementById("errorTag");
// let trashTarget = document.getElementById("trashTag");
let itemGroupTarget;
let itemGroup;
let item;
let edit;
let trash;
let buttonGroup;
let itemNumber = 0;

// trashTarget.addEventListener("click", () => {
//     console.log("check");
// })

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
    trash = document.createElement("button");
    trash.classList.add("listButton");
    trash.setAttribute("id", "trashTag");
    trash.innerHTML = "<img src='img/trash-alt-solid.svg' alt='trash'>";

    edit = document.createElement("button");
    edit.classList.add("listButton");
    edit.setAttribute("id", "editTag");
    edit.innerHTML = "<img src='img/edit-solid.svg' alt='trash'>";

    buttonGroup.appendChild(edit);
    buttonGroup.appendChild(trash);
    itemGroup.appendChild(buttonGroup);
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
