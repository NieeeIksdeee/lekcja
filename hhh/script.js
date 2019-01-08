const mainDiv = document.querySelector('.mainDiv');
const guzik = document.querySelector('.button');
const input = document.querySelector('.tekst');

guzik.addEventListener('click', function(){
    const dzieckoDiv = document.createElement('div');
    dzieckoDiv.className = "fajna_klasa";
    dzieckoDiv.innerText = input.value;
    mainDiv.appendChild(dzieckoDiv);
});
