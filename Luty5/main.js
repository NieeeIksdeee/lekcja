// fetch("https://swapi.co/api/people/").then(function(response) {
//     return response.json();
// }).then(function(responseUnpacked) {
//     let dane = responseUnpacked.results;
//     dane.forEach(function(hero) {
//         console.log(hero.name);
//         let li = document.createElement("li");
//         li.innerText = hero.name;

//         document.querySelector(".swList").appendChild(li);
//     })
// })

const getData = {
    getBtn: document.querySelector(".getSWAPI"),
    getBtnNext: document.querySelector(".getNEXT"),
    swList: document.querySelector(".swList"),

    getAllFromSW: function() {
        if(this.swList.querySelectorAll("li").length !=0){
            return;
        }
        fetch("https://swapi.co/api/people/").then(function(response) {
            return response.json();
        }).then(function(responseUnpacked) {
            let dane = responseUnpacked.results;
            dane.forEach(function(hero) {
                console.log(hero.name);
                let li = document.createElement("li");
                let div = document.createElement("div");
                div.className="rem";
                li.className="lista"
                li.innerText = hero.name;
                this.swList.appendChild(li);
                li.appendChild(div);
            }, getData);

        });
        
    },
    delete: function(e){
        if(e.target.classList.contains("rem")){
            e.target.parentElement.remove();
        }
    },
    init: function() {
        this.getBtn.addEventListener("click", this.getAllFromSW.bind(getData));
        this.swList.addEventListener("click",this.delete.bind(getData));
    },
}

getData.init();

