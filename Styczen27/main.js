const lotteryApp = {
    button: document.querySelector(".losuj"),
    results: document.querySelector(".B"),
    losowanie: function(num) {
        return Math.floor(Math.random() * (num - 1)) + 1;
    },
    totek: function(max, amount) {
        let numbers = [];
        for (let i = 0; i < amount; i++) {
            let a = this.losowanie(max);
            while (numbers.indexOf(a) !== -1) {
                console.log("Duplikat: " + a);
                a = this.losowanie(max);
            }
            numbers.push("<span class='totekNumber'>" + a + "</span>");
        }
        return numbers;
    },
    showResults: function() {
        this.results.innerHTML = this.totek(49, 6).join("");
    },

    //podejście 1
    init: function() {
        this.button.addEventListener("click", this.showResults.bind(this));
    }
}

//podejście 2
// lotteryApp.button.addEventListener("click", lotteryApp.showResults.bind(lotteryApp));

lotteryApp.init();