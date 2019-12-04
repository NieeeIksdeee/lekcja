let a = document.querySelector(".a");
let wynik = document.querySelector(".wynik");
let btn = document.querySelector(".btn");
let dolar = document.querySelector(".dolar");
let waluta = document.querySelector(".waluta");

const xhr = new XMLHttpRequest();

xhr.responseType = "json";

xhr.addEventListener("load",function(){
    if(xhr.status === 200){
        dolar.innerText = xhr.response.rates[0].mid.toFixed(2);
    }
})

xhr.open("GET","http://api.nbp.pl/api/exchangerates/rates/a/"+waluta.value+"/last/1?format=json",true);
xhr.send();

btn.addEventListener("click",function(){
    wynik.innerText = (parseFloat(a.value)/parseFloat(dolar.innerText)).toFixed(2);
})
console.log(waluta.value);