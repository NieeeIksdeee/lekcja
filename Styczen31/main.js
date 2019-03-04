
var suma = {
    myInput: document.querySelector(".input"),
    myButton1: document.querySelector(".button1"),
    myButton2: document.querySelector(".button2"),
    divM: document.querySelector(".main"),
    divM2: document.querySelector(".main2"),
    s:[1,2,3,4,5],
    dodaj: function(){
        this.s.push(this.myInput.value);
        console.log(this.s);
        this.update();
    },
    usun: function(){
        this.s.pop();
        console.log(this.s);
        this.update();
    },
    update: function(){
        this.divM2.innerText=this.s;
    },
    init: function(){
        this.myButton1.addEventListener('click',this.dodaj.bind(this));
        this.myButton2.addEventListener('click',this.usun.bind(this));
        this.update();
    },
};
suma.init();


