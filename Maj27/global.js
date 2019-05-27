export const KEY = {
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32
};

export const GAME = {
  WIDTH: 640,
  HEIGHT: 480,
  PLAYER_WIDTH: 20,
  LASER_MAX_SPEED: 150
};

export const ENEMY = {
  HORIZONTAL_PADDING: 80,
  VERTICAL_PADDING: 50,
  VERTICAL_SPACING: 70,
  PER_ROW: 10,
  ROWS: 3,
  COOLDOWN: 20
};

export const GAME_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  shoot: true,
  playerX: 0,
  playerY: 0,
  playerCountDown: 0,
  lasers: [],
  enemies: [],
	enemyLasers: [],
	score: 0,
	armor: 0,
	gameOver: false,

};

export const $container = document.querySelector(".game");
export const $playerDOM = document.createElement("img");
export const BtnGameOver = document.querySelector(".game-over");