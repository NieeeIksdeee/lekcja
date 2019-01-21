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
var osoba = {
    imie: "Jan",
    nazwisko: "Kowalski",
    powitanie: function() {
        console.log("Witam: " + osoba.imie);
    },
    setImie: function(newName) {
        osoba.imie = newName;
    }
}

console.log(osoba);
osoba.powitanie();
osoba.setImie("Paweł");
osoba.powitanie();