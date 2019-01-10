const input = document.getElementById("tekst");
input.addEventListener("keyup", function() {
    if(input.value.length < 5) {
        input.style.background = "red";
    }
    else {
        input.style.background = "green";
    }
});