var acc = document.querySelectorAll(".accordion");

var footer = document.querySelector(".footer");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
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