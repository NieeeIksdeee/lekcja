const divA = document.querySelector(".a");
const divB = document.querySelector(".b");
const divC = document.querySelector(".c");
const divM = document.querySelector(".main2");
const list1 = document.querySelector(".l1");
const list2 = document.querySelector(".l2");
const list3 = document.querySelector(".l3");

var firemanSam = {
    iloscWody: 100,
    iloscUgaszonychPozarow: 0,
    iloscPaliwa: 50,

    gasPozar: function(){
        this.iloscWody-=5
        this.iloscUgaszonychPozarow+=1;
        console.log("Gasisz pozar. Woda-5. Ugaszone pozary+1");
        return 7;
    },
    jedzDoPozaru: function(){
        this.iloscPaliwa-=10;
        console.log("Jedziesz do pozaru");
    },
    uzupelnijZapasy: function(){
        this.iloscPaliwa+=15;
        this.iloscWody+=10;
        console.log("Uzupelniles zapasy");
    },
    stan: function(){
        console.log("Ilosc wody: "+this.iloscWody);
        console.log("Ilosc paliwa: "+this.iloscPaliwa);
        console.log("Ilosc ugaszonych pozarow: "+this.iloscUgaszonychPozarow);
        return "Ilosc ugaszonych pozarow: "+this.iloscUgaszonychPozarow;
    },
    init: function(){
        this.jedzDoPozaru();
        this.gasPozar();
        this.uzupelnijZapasy();

    },
      
}
divA.addEventListener('click', function(){
    divM.innerText=firemanSam.stan()
});
divB.addEventListener('click', function(){
    divM.innerText=firemanSam.gasPozar()
});
divC.addEventListener('click', function(){
    firemanSam.uzupelnijZapasy()
});