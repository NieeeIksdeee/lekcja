(
    function slider(){
        const imgSet = document.querySelector(".contentSlider");
        const leftArrow = document.querySelector(".left");
        const rightArrow = document.querySelector(".right");
        let dx = 0;
        

        function moveSlider(){
            imgSet.style.transform = `translateX(${dx}%)`;
        }

        leftArrow.addEventListener("click",function(){
            console.log("left");
            dx = dx + 33.33;
            moveSlider();
        })
        rightArrow.addEventListener("click",function(){
            console.log("right");
            dx = dx - 33.33;
            moveSlider();
        })
        
        

        console.dir(imgSet);
    }
)();