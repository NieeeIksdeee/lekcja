//1. GLOBALNE ZMIENNE
//2. PRELOAD
//3. CREATE
//4. UPDATE UPDATE UPDATE UPDATE....
//5. OTHERS
import {GAME_STATE, $container} from './global.js';

import {onKeyDown, onKeyUp} from './controls.js';

import {createPlayer, updatePlayer} from './player.js';

import {updateLaser, updateEnemyLasers} from './laser.js';
import {updateEnemy, createEnemiesArmy} from './enemies.js';

function update () {
	//const currentTime = performance.now();
	const currentTime = Date.now ();
	const dt = (currentTime - GAME_STATE.lastTime) / 1000;
	if (GAME_STATE.gameOver) {
	document.querySelector ('.game-over').style.display = 'flex';
	return;
	}
	updatePlayer (dt);
	updateLaser (dt);
	updateEnemy (dt);
	updateEnemyLasers (dt, $container);
	GAME_STATE.lastTime = currentTime;
}

function drawGame () {
	update ();
	window.requestAnimationFrame (drawGame);
}

function init () {
	const $container = document.querySelector ('.game');
	createPlayer ($container);
	createEnemiesArmy ();
}
init ();

window.requestAnimationFrame (drawGame);
