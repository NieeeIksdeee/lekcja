const GAME_WIDTH = 1028;
const GAME_HEIGHT = 720;

const PLAYER_WIDTH = 20;

function setPosition($element, x, y){  
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container){
    const $player = document.createElement("img");
    $player.src = "ship.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_WIDTH/2, GAME_HEIGHT-50);
}

function init(){
    $container = document.querySelector(".game");
    createPlayer($container);
}
init()