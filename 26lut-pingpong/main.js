var cvs = document.querySelector("#canvas");

var ctx = cvs.getContext("2d");

var table = new Image ();

table.src = "table.png";

function draw(){
    request = requestAnimationFrame(draw);

    ctx.drawImage(table,0,0); 
};
draw();