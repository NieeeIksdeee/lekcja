import { GAME_STATE, GAME, $container } from "./global.js";
import { setPosition, rectsIntersect } from "./tools.js";
import { destroyEnemy } from "./enemies.js";
import {destroyPlayer } from "./player.js"

export function createLaser($container, x, y) {
  const $laserDOM = document.createElement("img");
  $laserDOM.src = "images/spaceMissiles_040.png";
  $laserDOM.className = "laser";
  $container.appendChild($laserDOM);
  const laser = {
    x,
    y,
    $laserDOM
  };
  GAME_STATE.lasers.push(laser);
  setPosition(laser.$laserDOM, x, y - 10);
}



export function updateLaser(dt) {
  const lasers = GAME_STATE.lasers;
  lasers.map(laser => {
    laser.y -= GAME.LASER_MAX_SPEED * dt;
    setPosition(laser.$laserDOM, laser.x, laser.y);
    if (laser.y < 0) {
      destroyLaser($container, laser);
    }
    const r1 = laser.$laserDOM.getBoundingClientRect();
    GAME_STATE.enemies.map(enemy => {
      const r2 = enemy.$enemyDOM.getBoundingClientRect();
      if (rectsIntersect(r1, r2)) {
        destroyEnemy($container, enemy);
        destroyLaser($container, laser);
      }
    });
  });
  GAME_STATE.lasers = GAME_STATE.lasers.filter(laser => !laser.isDead);
}

export function createEnemyLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "images/spaceMissiles_040.png";
  $element.className = "enemy-laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  GAME_STATE.enemyLasers.push(laser);
  setPosition($element, x, y);
}

export function updateEnemyLasers(dt, $container) {
  const lasers = GAME_STATE.enemyLasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * GAME.LASER_MAX_SPEED;
    if (laser.y > GAME.HEIGHT) {
		destroyEnemyLaser($container, laser);
		
    }
    setPosition(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const player = document.querySelector(".player");
    const r2 = player.getBoundingClientRect();
    if (rectsIntersect(r1, r2)) {
      // Player was hit
		destroyPlayer($container, player);
		destroyEnemyLaser($container, laser);
      break;
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead);
}

function destroyLaser($container, laser) {
	$container.removeChild(laser.$laserDOM);
  laser.isDead = true;
}

function destroyEnemyLaser($container, laser) {
	console.log(laser, $container);
	 $container.removeChild(laser.$element);
	laser.isDead = true;
  }
