let o = {
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
    divM: document.querySelector(".main"),
    divL: document.querySelector(".list"),

   

    add: function(){
        let divN = document.createElement("span");
        let divNe = document.createElement("span");
        let divNew = document.createElement("span");
        let divNews = document.createElement("span");
        let divA = document.createElement("div");

        divA.className="aContainer";
        divN.className="kid";
        divNe.className="kide";
        divNew.className="kidew";
        divNews.className="kidews";

        divN.innerText=this.input.value;
        divNe.innerText="Usuń";
        divNew.innerText="Edytuj";
        divNews.innerText="Zatwierdź";

        this.divL.appendChild(divA);
        divA.appendChild(divN);
        divA.appendChild(divNe);
        divA.appendChild(divNew);
        divA.appendChild(divNews);

        this.input.value=" ";
        divNe.addEventListener("click",function(e){
            e.target.parentElement.remove();
        });
        divNew.addEventListener("click",function(e){
            divN.innerHTML="<input type='text' class='input'>";
        });
        divNews.addEventListener("click",function(e){
            divN.innerHTML=e.target.parentElement.querySelector(".input").value;
        })
    },
    
    

    init: function(){
        this.button.addEventListener("click",this.add.bind(this));
        
    },
};
o.init();