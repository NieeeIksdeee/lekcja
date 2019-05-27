export const KEY_CODE_LEFT = 37;
export const KEY_CODE_RIGHT = 39;
export const KEY_CODE_SPACE = 32;

export const GAME_WIDTH = 1028;
export const GAME_HEIGHT = 795;

export const PLAYER_WIDTH = 20;
export const LASER_MAX_SPEED = 1000;

export const GAME_STATE = {
    lastTime: Date.now(),
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    laserShot: false,
    playerX: 0,
    playerY: 0,
    lasers: [],
    enemies: [],
    enemyLasers: [],
	score: 0,
	armor: 0,
	gameOver: false,

};
}
export const $container = document.querySelector(".game");
export const $playerDOM = document.createElement("img");
