var cvs = document.querySelector("#canvas");

var ctx = cvs.getContext("2d");

var bg = new Image ();
var bird = new Image ();
var fg = new Image ();
var pipeTop = new Image();
var pipeDown = new Image();


var bX = 10;
var bY = 150;
var score = 0;
// var pX = cvs.width;
// var pY = 0;

var gap = 80;

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0,
}

bg.src = "bg.png";
bird.src="bird.png";
fg.src="fg.png";
pipeTop.src ="pipeNorth.png";
pipeDown.src ="pipeSouth.png";
document.addEventListener("keydown",jump);
function jump(){
    bY= bY-40;
}


function draw(){
    ctx.drawImage(bg,0,0);
    

    for(var i = 0; i<pipe.length; i++){
        ctx.drawImage(pipeTop,pipe[i].x,pipe[i].y);  
        ctx.drawImage(pipeDown,pipe[i].x,pipe[i].y+pipeTop.height+gap); 
        pipe[i].x -=2;
    
        if(pipe[i].x==100){
            pipe.push({
                x: cvs.width,
                y:80*Math.random()-8 
            })
        }
        if(pipe[i].x < -300){
            pipe.shift();
        }
        if(
            bX+bird.width-4 >= pipe[i].x &&  bX <= pipe[i].x + pipeTop.width
            &&
            (bY<=pipe[i].y+pipeTop.height || bY+bird.height>=pipe[i].y+pipeTop.height+gap || bY==cvs.height-bird.height-fg.height)
            ){
            console.log("ZDERZENIE");
            location.reload();
        }else{

        }
        if(pipe[i].x == 6){
            score++;
        }
    }
    

    bY = bY + 1;

    // if(bY==cvs.height-bird.height-fg.height){

    // }else{
    //     requestAnimationFrame(draw);
    // }

    requestAnimationFrame(draw);
    ctx.drawImage(fg,0,cvs.height-fg.height);
    ctx.drawImage(bird,bX,bY);

    ctx.font = ("15px Verdana");
    ctx.fillText("Score: "+score, 10,10);
}
draw();
