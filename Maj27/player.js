import { GAME_STATE, GAME, $container, $playerDOM } from "./global.js";
import { setPosition, clamp } from "./tools.js";
import { createLaser } from "./laser.js";

export function createPlayer($container) {
  GAME_STATE.playerX = GAME.WIDTH / 2;
  GAME_STATE.playerY = GAME.HEIGHT - 50;
  $playerDOM.src = "images/spaceShips_004.png";
  $playerDOM.className = "player";
  $container.appendChild($playerDOM);
  setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}

export function updatePlayer(dt) {
  if (GAME_STATE.leftPressed) {
    GAME_STATE.playerX -= 5;
  }
  if (GAME_STATE.rightPressed) {
    GAME_STATE.playerX += 5;
  }
  GAME_STATE.playerX = clamp(
    GAME_STATE.playerX,
    GAME.PLAYER_WIDTH,
    GAME.WIDTH - GAME.PLAYER_WIDTH
  );

  if (GAME_STATE.spacePressed && GAME_STATE.shoot) {
    createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
    GAME_STATE.shoot = false;
  }
  if (GAME_STATE.playerCountDown > 0) {
    GAME_STATE.playerCountDown -= dt;
  }

  setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}

export function destroyPlayer($container, player) {
	$container.removeChild($playerDOM);
  GAME_STATE.gameOver = true;
}
