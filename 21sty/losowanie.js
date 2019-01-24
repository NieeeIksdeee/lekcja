let button = document.querySelector(".btn");
let results = document.querySelector(".wynik");

function losowanie(num) {
    return Math.floor(Math.random() * (num - 1)) + 1;
}
function totek(max, amount) {
    let numbers = [];

    for (let i = 0; i < amount; i++) {
        let a = losowanie(max);
        while (numbers.indexOf(a) !== -1) {
            console.log("Duplikat: " + a);
            a = losowanie(max);
        }
        numbers.push(a);
    }

    return numbers;
}
function showResults() {
    results.innerText = totek(49, 20);
}

button.addEventListener("click", showResults);