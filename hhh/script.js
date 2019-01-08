const mainDiv = document.querySelector('.mainDiv');
const guzik = document.querySelector('.button');

guzik.addEventListener('click', function(){
    const dzieckoDiv = document.createElement('div');
    dzieckoDiv.className = "fajna_klasa";
    dzieckoDiv.innerText = "tekst w divie o nazwie dzieckoDiv";
    mainDiv.appendChild(dzieckoDiv);
});
