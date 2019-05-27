import {
    GAME_STATE,$container,KEY_CODE_LEFT,KEY_CODE_RIGHT,KEY_CODE_SPACE,GAME_WIDTH,GAME_HEIGHT,PLAYER_WIDTH,LASER_MAX_SPEED,$playerDOM 
} from "/global.js";

import{
    setPosition,clamp
} from "/tools.js";
import{
    createLaser,updateLaser
} from "/laser.js";

export function createPlayer($container){
    GAME_STATE.playerX = GAME_WIDTH/2;
    GAME_STATE.playerY = GAME_HEIGHT-110;
    $playerDOM.src = "ship.png";
    $playerDOM.className = "player";
    $container.appendChild($playerDOM);
    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}
export function updatePlayer(){
    if(GAME_STATE.leftPressed === true){
        GAME_STATE.playerX -= 5;
    }
    if(GAME_STATE.rightPressed === true){
        GAME_STATE.playerX += 5;
    }
    if(GAME_STATE.spacePressed === true){

        if(GAME_STATE.laserShot === false){
            createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
            GAME_STATE.laserShot=true;
        }
        
        
    }else{
        GAME_STATE.laserShot = false;
    }
    GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);

    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}