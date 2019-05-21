import {
    GAME_STATE,$container,KEY_CODE_LEFT,KEY_CODE_RIGHT,KEY_CODE_SPACE,GAME_WIDTH,GAME_HEIGHT,PLAYER_WIDTH, LASER_MAX_SPEED,$playerDOM
} from "/global.js";
import{
    setPosition,clamp
} from "/tools.js";
export function createEnemy($container,x,y){
    const $enemyDOM = document.createElement("img");
    $enemyDOM.src = "enemy.png";
    $enemyDOM.className = "enemy";
    $container.appendChild($enemyDOM);
    const enemy ={
        x,
        y,
        $enemyDOM
    };
    GAME_STATE.enemies.push(enemy);
    setPosition($enemyDOM, enemy.x, enemy.y);
}
export function updateEnemy(){

}