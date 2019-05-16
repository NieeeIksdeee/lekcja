var acc = document.querySelectorAll(".accordion");
var accm = document.querySelectorAll(".accordionm");

var footer = document.querySelector(".footer");
var i;

let btn1 = document.querySelector(".accordion1");
let btn2 = document.querySelector(".accordion2");
let btn3 = document.querySelector(".accordion3");
let btn4 = document.querySelector(".accordion4");
let btn5 = document.querySelector(".accordion5");

let tab1 = document.querySelector(".article1");
let tab2 = document.querySelector(".article2");
let tab3 = document.querySelector(".article3");
let tab4 = document.querySelector(".article4");
let tab5 = document.querySelector(".article5");

let tabs = document.querySelectorAll(".tabs");

console.log(tabs);

document.addEventListener("click",function(e){
  if(e.target.classList[0] === "accordion1"){
    tabs[0].classList.add("isActive");
    tabs[1].classList.remove("isActive");
    tabs[2].classList.remove("isActive");
    tabs[3].classList.remove("isActive");
    tabs[4].classList.remove("isActive");
    tabs[6].classList.remove("isActive");
    tabs[7].classList.remove("isActive");
    tabs[8].classList.remove("isActive");
    tabs[9].classList.remove("isActive");
  }
  if(e.target.classList[0] === "accordion2"){
    tabs[0].classList.remove("isActive");
    tabs[1].classList.add("isActive");
    tabs[2].classList.remove("isActive");
    tabs[3].classList.remove("isActive");
    tabs[4].classList.remove("isActive");
    tabs[6].classList.remove("isActive");
    tabs[7].classList.remove("isActive");
    tabs[8].classList.remove("isActive");
    tabs[9].classList.remove("isActive");
  }
  if(e.target.classList[0] === "accordion3"){
    tabs[0].classList.remove("isActive");
    tabs[1].classList.remove("isActive");
    tabs[2].classList.add("isActive");
    tabs[3].classList.remove("isActive");
    tabs[4].classList.remove("isActive");
    tabs[6].classList.remove("isActive");
    tabs[7].classList.remove("isActive");
    tabs[8].classList.remove("isActive");
    tabs[9].classList.remove("isActive");
  }
})

function clock(){
    time = new Date();
    footer.innerText = time.toLocaleTimeString();
}
x = setInterval(clock,1000);
clock()


function addLoader(){
  var loader=document.getElementById('loader');
loader.style.height="100vh";
loader.style.display="flex";
loader.style.justifyContent="center";
loader.style.alignItems="center";
 var x="";
for(var i=1;i<13;i++)
{ x+="<div style='filter:hue-rotate(" + i*30 + "deg);-webkit-animation:move 1.5s " + .15*i + "s cubic-bezier(.3, .2, .1, 1) alternate infinite;' class='star C-" + i + "'>☀️</div>"};

loader.innerHTML=x;}
addLoader();