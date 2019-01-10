const ListaToDo = {
    mainDiv: document.querySelector("#mainDiv"),
    input: document.querySelector("#tekst"),
    guzik: document.querySelector("#button"),

    dodajDoListy: function() {
        const dzieckoDiv = document.createElement("div");
        dzieckoDiv.className = "fajna_klasa";
        dzieckoDiv.innerText = input.value;
        mainDiv.appendChild(dzieckoDiv);
        input.value = "";
    }
}
ListaToDo.guzik.addEventListener("click", function(){ListaToDo.dodajDoListy();});