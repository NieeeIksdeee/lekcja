$images = document.querySelectorAll(".slider_item");
$left = document.querySelector(".left");
$right = document.querySelector(".right");


$images[0].classList.add("active");


$right.addEventListener("click",function(){
    if($images[0].classList.contains("active")){
        $images[0].classList.remove("active");
        $images[0].classList.remove("slide_l");
        $images[1].classList.add("active");
        $images[1].classList.add("slide_r");
        console.log("Dodaje animacje do 2");
        
    }
    else if($images[1].classList.contains("active")){
        $images[1].classList.remove("active");
        console.log("usuwam animacje do 2");
        $images[1].classList.remove("slide_r");
        $images[2].classList.add("active");
        console.log("Dodaje animacje do 3");
        $images[2].classList.add("slide_r");
    }
    else if($images[2].classList.contains("active")){
        $images[2].classList.remove("active");
        console.log("usuwam animacje do 3");
        $images[2].classList.remove("slide_r");
        $images[3].classList.add("active");
        console.log("Dodaje animacje do 4");
        $images[3].classList.add("slide_r");
    }
    else if($images[3].classList.contains("active")){
        $images[3].classList.remove("active");
        console.log("usuwam animacje do 4");
        $images[3].classList.remove("slide_r");
        $images[4].classList.add("active");
        console.log("Dodaje animacje do 5");
        $images[4].classList.add("slide_r");
        
    }
});
$left.addEventListener("click",function(){
    if($images[4].classList.contains("active")){
        $images[4].classList.remove("active");
        console.log("usuwam animacje do 5");
        $images[4].classList.remove("slide_r");
        $images[4].classList.remove("slide_l");
        $images[3].classList.add("active");
        $images[3].classList.add("slide_l");
        
    }
    else if($images[3].classList.contains("active")){
        $images[3].classList.remove("active");
        $images[3].classList.remove("slide_l");
        $images[2].classList.add("active");
        $images[2].classList.add("slide_l");
    }
    else if($images[2].classList.contains("active")){
        $images[2].classList.remove("active");
        $images[2].classList.remove("slide_l");
        $images[1].classList.add("active");
        $images[1].classList.add("slide_l");
    }
    else if($images[1].classList.contains("active")){
        $images[1].classList.remove("active");
        $images[1].classList.remove("slide_l");
        $images[0].classList.add("active");
        $images[0].classList.add("slide_l");
    }
})

