import {
    GAME_STATE,$container,KEY_CODE_LEFT,KEY_CODE_RIGHT,KEY_CODE_SPACE,GAME_WIDTH,GAME_HEIGHT,PLAYER_WIDTH, LASER_MAX_SPEED,$playerDOM
} from "/global.js";

import{
    setPosition,clamp
} from "/tools.js";

import{
    createLaser,updateLaser
} from "/laser.js";

import{
    createPlayer,updatePlayer
} from "/player.js"
import {createEnemy 
}from "./enemies.js";


function update(){
    const currentTime = Date.now();
    const dt = (currentTime-GAME_STATE.lastTime) / 1000;
    updatePlayer();
    updateLaser(dt);
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init(){
    createPlayer($container);
    createEnemy($container,400,0);
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