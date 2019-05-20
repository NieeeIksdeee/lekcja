const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 1028;
const GAME_HEIGHT = 720;

const PLAYER_WIDTH = 20;
const LASER_MAX_SPEED = 1;

const GAME_STATE = {
    lastTime: Date.now(),
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    playerX: 0,
    playerY: 0,
    lasers: []
}
const $container = document.querySelector(".game");
const $playerDOM = document.createElement("img");
const $laserDOM = document.createElement("img");
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

    // const $playerDOM = document.createElement("img");
    $playerDOM.src = "ship.png";
    $playerDOM.className = "player";
    $container.appendChild($playerDOM);
    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}
function updatePlayer(){
    if(GAME_STATE.leftPressed === true){
        GAME_STATE.playerX -= 5;
    }
    if(GAME_STATE.rightPressed === true){
        GAME_STATE.playerX += 5;
    }
    if(GAME_STATE.spacePressed === true){
        createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
    }
    GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);

    const $player = document.querySelector(".player");
    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}
// LASER

function createLaser($container, x, y){
    
    $laserDOM.src = "spaceMissiles.png";
    $laserDOM.className = "laser";
    $container.appendChild($laserDOM);
    const laser = {
        x,
        y,
        $laserDOM,
    }
    GAME_STATE.lasers.push(laser);
    setPosition(laser.$laserDOM, laser.x, laser.y);
}

function updateLaser(dt){
    const lasers = GAME_STATE.lasers;
    lasers.map(laserDOM =>{
        laserDOM.y -= LASER_MAX_SPEED * dt;
    setPosition(laserDOM.$laserDOM,laserDOM.x,laserDOM.y)
    })
}

// END LASER

function update(){
    const currentTime = Date.now();
    const dt = (currentTime-GAME_STATE.lastTime / 1000);
    updatePlayer();
    updateLaser(dt);
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init(){
    createPlayer($container);
}
init()

function onKeyDown(e){
    console.log(e.keyCode, e);
    if(e.keyCode === KEY_CODE_LEFT){
        console.log("idz w lewo");
        GAME_STATE.leftPressed = true;
    }else if(e.keyCode === KEY_CODE_RIGHT){
        console.log("idz w prawo");
        GAME_STATE.rightPressed = true
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