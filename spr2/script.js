const lista = document.querySelector(".lista");
const input = document.querySelector(".tekst");
const osoba = document.querySelector(".selectimie");
const guzik = document.querySelector(".guzik");

function dodaj() {
    let a = input.value;
    let b = osoba.value;
    input.value = "";
    setTimeout(function() {
        const element = document.createElement("div");
        element.className = "element";
        element.innerHTML = "<span class='first'>" + a + "</span> <span class='second'>" + b + "</span>";
        lista.appendChild(element);
    }, 2000);
}

guzik.addEventListener("click", dodaj);