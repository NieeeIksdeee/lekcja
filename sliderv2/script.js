function slider(){

    let slideShow = document.querySelector(".slideShow");
    let button_top = document.querySelector(".top");
    let button_bottom = document.querySelector(".bottom");
    let addDiv = document.querySelector(".addDiv")
    let dx = 0;

    function slideImg(){
        slideShow.style.transform = `translateY(${dx}%)`;
    }
    addDiv.addEventListener("click",function(){
        let img = document.createElement("div");
        img.classList.add("img");
        slideShow.appendChild(img);
        console.log("DODAJ");
    })

    button_top.addEventListener("click",function(){
        dx = dx + 100
        slideImg();
    })
    button_bottom.addEventListener("click",function(){
        dx = dx - 100
        slideImg();
    })


};
slider();