let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider_items = document.querySelector(".slider_items");
let dot_menu = document.querySelector(".dot_menu");

let img1 = "images/img1.jpg";
let img2 = "images/img2.jpeg";
let img3 = "images/img3.jpeg";
let img4 = "images/img4.jpg";
let img5 = "images/img5.jpg";


let images = [img1,img2,img3,img4,img5];

let i = 0;

let img = document.createElement("img");
img.classList.add("img");
img.src=images[0];
slider_items.appendChild(img);
img.classList.add("slide_r");

function next(){
    
   if(i<images.length-1){
        i++;
   }
   else{
       i=0;
       
   }
   
   img.src=images[i];
   
}

function prew(){
    
    if(i>0){
         i--;
    }
    else{
        i=images.length-1;
        
    }
    img.src=images[i];
 }
x=0;
images.forEach(function(e){  
    dot = document.createElement("span");
    dot.innerText=x+1;
    dot.classList.add("dot");
    dot.classList.add("dot_"+(x+1));
    dot_menu.appendChild(dot);
    x++;
    dot.addEventListener("click", function(){
        console.log("pr");
    })
})
 setInterval(next,5000);


// $right.addEventListener("click",function(){
//     if($images[0].classList.contains("active")){
//         $images[0].classList.remove("active");
//         $images[0].classList.remove("slide_l");
//         $images[1].classList.add("active");
//         $images[1].classList.add("slide_r"); 
//     }
//     else if($images[1].classList.contains("active")){
//         $images[1].classList.remove("active");
//         $images[1].classList.remove("slide_r");
//         $images[2].classList.add("active");
//         $images[2].classList.add("slide_r");
//     }
//     else if($images[2].classList.contains("active")){
//         $images[2].classList.remove("active");
//         $images[2].classList.remove("slide_r");
//         $images[3].classList.add("active");
//         $images[3].classList.add("slide_r");
//     }
//     else if($images[3].classList.contains("active")){
//         $images[3].classList.remove("active");
//         $images[3].classList.remove("slide_r");
//         $images[4].classList.add("active");
//         $images[4].classList.add("slide_r");
        
//     }
// });
// $left.addEventListener("click",function(){
//     if($images[4].classList.contains("active")){
//         $images[4].classList.remove("active");
//         $images[4].classList.remove("slide_r");
//         $images[4].classList.remove("slide_l");
//         $images[3].classList.add("active");
//         $images[3].classList.add("slide_l");
        
//     }
//     else if($images[3].classList.contains("active")){
//         $images[3].classList.remove("active");
//         $images[3].classList.remove("slide_l");
//         $images[2].classList.add("active");
//         $images[2].classList.add("slide_l");
//     }
//     else if($images[2].classList.contains("active")){
//         $images[2].classList.remove("active");
//         $images[2].classList.remove("slide_l");
//         $images[1].classList.add("active");
//         $images[1].classList.add("slide_l");
//     }
//     else if($images[1].classList.contains("active")){
//         $images[1].classList.remove("active");
//         $images[1].classList.remove("slide_l");
//         $images[0].classList.add("active");
//         $images[0].classList.add("slide_l");
//     }
// })

// <div class="slider_item img_one">
// <img class="img" src="images/img1.jpg">
// </div>
// <div class="slider_item img_two">
// <img class="img" src="images/img2.jpeg">
// </div>
// <div class="slider_item img_three">
// <img class="img" src="images/img3.jpeg">
// </div>
// <div class="slider_item img_four">
// <img class="img" src="images/img4.jpg">
// </div>
// <div class="slider_item img_five">
// <img class="img" src="images/img5.jpg">
// </div>
