const btnGet = document.querySelector(".btnget");
const list = document.querySelector(".results");

btnGet.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        if (this.status == 200) {
            let response = JSON.parse(this.response);
            response.forEach(function(item) {
                let li = document.createElement("li");
                li.className = "listItem";
                li.innerText = "ID: " + item.id + ", " + item.title;
                list.appendChild(li);
            })
        }
    });
});