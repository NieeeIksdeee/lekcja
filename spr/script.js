const button = document.querySelector(".button");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

function dodaj() {
    const item = document.createElement("li");
    item.innerText = input.value;
    item.className = "listitem";
    input.value = "";
    list.appendChild(item);
}

button.addEventListener("click", dodaj);

document.querySelector(".list li:nth-child(4)").style.background = "red";

// var _obj_1 = document.querySelector(".left");
// const _obj_2 = document.querySelector(".right");
// let _obj_3 = document.querySelector(".inputcontainer");

// console.log(_obj_1);
// console.log(_obj_2);
// console.log(_obj_3);
// console.dir(window);
