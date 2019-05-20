const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 1028;
const GAME_HEIGHT = 720;

const PLAYER_WIDTH = 20;

const GAME_STATE = {
    lastTime: Date.now(),
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    playerX: 0,
    playerY: 0
}

function clamp(v, min, max){
    if(v<min){
        return min;
    } else if (v>max){
        return max;
    }else{
        return v;
    }
}

function setPosition($element, x, y){  
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container){
    GAME_STATE.playerX = GAME_WIDTH/2;
    GAME_STATE.playerY = GAME_HEIGHT-110;

    const $player = document.createElement("img");
    $player.src = "ship.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}
function updatePlayer(){
    if(GAME_STATE.leftPressed === true){
        GAME_STATE.playerX -= 5;
    }
    if(GAME_STATE.rightPressed === true){
        GAME_STATE.playerX += 5;
    }
    GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);

    const $player = document.querySelector(".player");
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}
// LASER

function createLaser($container, x, y){
    const $laser = document.createElement("img");
    $laser.src = "spaceMissiles.png";
    $laser.className = "laser";
    $container.appendChild($laser);
    const laser = {
        x,
        y,
        $laser,
    }
    GAME_STATE.laser.push(laser)
    setPosition($laser, 100, 100)
}

function updateLaser(){
    const lasers = GAME_STATE.laser;
    lasers.map(laser =>{
        laser.y -= LASER_MAX_SPEED *dt;
        setPosition(laser.)
    })
}

// END LASER

function update(){
    const currentTime = Date.now();
    const dt = (currentTime-GAME_STATE.lastTime / 1000);
    updatePlayer();
    updateLaser();
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init(){
    $container = document.querySelector(".game");
    createPlayer($container);
}
init()

function onKeyDown(e){
    console.log(e.keyCode, e);
    if(e.keyCode === KEY_CODE_LEFT){
        console.log("idz w lewo");
        GAME_STATE.leftPressed = true;
        // GAME_STATE.playerX -= 5;
        // const $player = document.querySelector(".player");
        // setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
    }else if(e.keyCode === KEY_CODE_RIGHT){
        console.log("idz w prawo");
        GAME_STATE.rightPressed = true
        // GAME_STATE.playerX += 5;
        // const $player = document.querySelector(".player");
        // setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
    } else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = true;
    }
}

function onKeyUp(e){
    if (e.keyCode === KEY_CODE_LEFT){
        GAME_STATE.leftPressed = false;      
    } else if ( e.keyCode === KEY_CODE_RIGHT){
        GAME_STATE.rightPressed = false;
    } else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = false;
    }
}
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);