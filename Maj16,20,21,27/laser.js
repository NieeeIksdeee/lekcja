import {
    GAME_STATE,
    $container,
    KEY_CODE_LEFT,
    KEY_CODE_RIGHT,
    KEY_CODE_SPACE,
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    LASER_MAX_SPEED,
    $playerDOM,
} from "/global.js";

import{
    setPosition,
    clamp
} from "/tools.js";

export function createLaser($container, x, y){
    const $laserDOM = document.createElement("img");
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

export function updateLaser(dt){
    const lasers = GAME_STATE.lasers;
    lasers.map(laser =>{
        laser.y -= LASER_MAX_SPEED * dt;
    setPosition(laser.$laserDOM,laser.x,laser.y)
    })
}
