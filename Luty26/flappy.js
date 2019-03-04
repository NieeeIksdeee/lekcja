//part-07 - Dodano:
//1. wyświetlanie pipeTop
//2. losowa wspol. Y dla pipeBottom i pipeTop 

const stopBtn = document.querySelector("#stopGame");
const restartBtn = document.querySelector("#restartGame");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
//ustawia rodzaj i wielkosc czcionki dla ctx
ctx.font = "16px Arial";
let birdPosY = 50;
let birdPosX = 30;
let gravity = 0.06;
let velocity = 0;
let jump = -3;
//zmienna score do zliczania punktów
let score = 0;

let bird = new Image();
let background = new Image();
let pipeBottom = new Image();
let counterFrame = 0;

bird.src = "images/bird.png";
background.src = "images/background.png";
pipeBottom.src = `images/pipeBottom.png`;

const pipes = [
	{
		x: 200,
		y: 250
	}
];

function draw() {
	requestID = requestAnimationFrame(draw);
	ctx.drawImage(background, 0, 0);
	ctx.drawImage(bird, birdPosX, birdPosY);
	counterFrame++;
	for (let i = 0; i < pipes.length; i++) {
		ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y); //
		pipes[i].x--;
		//detekcja kolizji
		//uderzenie z gory w pipeBottom
		if (
			pipes[i].x > 0 &&
			birdPosX > pipes[i].x &&
			birdPosY + bird.height >= pipes[i].y
		) {
			cancelAnimationFrame(requestID);
		}
		//uderzenie przodem w pipeBottom
		if (
			birdPosY > pipes[i].y &&
			birdPosX + bird.width > pipes[i].x + 2 &&
			pipes[i].x > 0
		) {
			cancelAnimationFrame(requestID);
		}
		//zlicza wynik czyli ilosc minietych przeszkod
		if (pipes[i].x == 0) { score++;}
		//usuwa pipeBottom ktory wyjechal z ekranu
		if (pipes[i].x <= -400) {
			pipes.shift();
		}
	}
	// co 200 klatek wstaw/dodaj obiekt z nowymi wspolrzednymi dla kolejnego pipeBottom
	if (counterFrame == 200) {
		pipes.push({ x: 310, y: 250 });
		counterFrame = 1;
	}

	velocity += gravity;
	ctx.fillText("Score: " +  score  , 100, 20);
	if (birdPosY > background.height - bird.height || birdPosY < 0) {
		velocity = 0; //stop bird move
		cancelAnimationFrame(requestID); //stop game
	}
	birdPosY = birdPosY + velocity;
}

document.addEventListener("keydown", function() {
	velocity = velocity + jump;
});

stopBtn.addEventListener("click", function() {
	// animacja stop;
	cancelAnimationFrame(requestID);
});

restartBtn.addEventListener("click", function() {
	//animacja start;
	velocity = 0;
	requestAnimationFrame(draw);
	this.blur();
});

draw();
