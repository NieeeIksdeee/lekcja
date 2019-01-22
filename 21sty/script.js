//zad1
// console.log(this);
// var a = 5;
// function foo() {
//     console.log(this);
// }

// foo();

//zad2
// var AmojObiekt = {
//     a: 10,
//     test: function() {
//         console.log("Jestem w obiekcie AmojObiekt: ", this);
//     }
// }

// AmojObiekt.test();

//zad3
// var imie = "ojeju";
// function powitanie() {
//     console.log("Witam o nie: " + this.imie);
// }

// var auto = {
//     imie: "Jan",
//     nazwisko: "Kowalski",
//     powitanie: function() {
//         console.log("Witam: " + this.imie);
//     },
//     setImie: function(newName) {
//         this.imie = newName;
//     },
//     init: function() {
//         powitanie();
//         this.powitanie();
//     }
// }

var auto = {
    imie: "Paweł",
    paliwo: "benzyna",
    predkosc: 0,
    powitanie: function() {
        console.log("Witam: " + this.imie);
    },
    zmienPredkosc: function(newSpeed) {
        this.predkosc = newSpeed;
    },
    wyswietlPredkosc: function() {
        console.log(this.predkosc);
    },
    init: function(speed) {
        this.powitanie();
        this.zmienPredkosc(speed);
        this.wyswietlPredkosc();
    }
}