import { GAME_STATE, GAME, ENEMY, $container } from "./global.js";
import { setPosition, random } from "./tools.js";
import { createEnemyLaser} from './laser.js'

export function createEnemy(x, y) {
  const $enemyDOM = document.createElement("img");
  $enemyDOM.src = "images/spaceShips_009.png";
  $enemyDOM.className = "enemy";
  $container.appendChild($enemyDOM);
  const enemy = {
    x,
    y,
    $enemyDOM,
    shootEnemy: random(0.5, ENEMY.COOLDOWN),
  };
  GAME_STATE.enemies.push(enemy);
  setPosition($enemyDOM, x, y);
}

export function updateEnemy(dt) {
  const dx = Math.sin(GAME_STATE.lastTime / 1000) * 50;
  const dy = Math.cos(GAME_STATE.lastTime / 1000) * 10;
  GAME_STATE.enemies.map(enemy => {
    let x = enemy.x + dx;
    let y = enemy.y + dy;
    setPosition(enemy.$enemyDOM, x, y);
    enemy.shootEnemy -= dt;
    if (enemy.shootEnemy <= 0) {
     createEnemyLaser($container, x, y);
      enemy.shootEnemy = ENEMY.COOLDOWN;
    }
  });
  GAME_STATE.enemies = GAME_STATE.enemies.filter(enemy => !enemy.isDead);
}

export function destroyEnemy($container, enemy) {
  $container.removeChild(enemy.$enemyDOM);
  enemy.isDead = true;
}

export function createEnemiesArmy() {
  const enemySpacing =
    (GAME.WIDTH - ENEMY.HORIZONTAL_PADDING * 2) / (ENEMY.PER_ROW - 1);
  let j, i, x, y;
  for (j = 0; j < ENEMY.ROWS; j++) {
    y = ENEMY.VERTICAL_PADDING + j * ENEMY.VERTICAL_SPACING;
    for (i = 0; i < ENEMY.PER_ROW; i++) {
      x = enemySpacing * i + ENEMY.HORIZONTAL_PADDING;
      createEnemy(x, y);
    }
  }
}
