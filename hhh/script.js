const ListaToDo = {
    mainDiv: document.querySelector(".mainDiv"),
    input: document.querySelector(".tekst"),
    guzik: document.getElementById("button"),

    dodajDoListy: function() {
        const dzieckoDiv = document.createElement("div");
        dzieckoDiv.className = "fajna_klasa";
        dzieckoDiv.innerText = this.input.value;
        this.mainDiv.appendChild(dzieckoDiv);
    }
}

ListaToDo.guzik.addEventListener("click", ListaToDo.dodajDoListy());
