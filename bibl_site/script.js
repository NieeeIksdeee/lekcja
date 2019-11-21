let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider_items = document.querySelector(".slider_items");
let dot_menu = document.querySelector(".dot_menu");
let logo = document.querySelector(".logo");

// ##################-Animacja-Logo-##################

    let l = 0;

    let logo1 = "bibl_logo.png";
    let logo2 = "bibl_logo2.png";
    let logo3 = "bibl_logo3.png";
    let logo4 = "bibl_logo4.png";

    let logos = [logo4,logo3,logo2,logo1];

    function logo_animate(){
        if(l<logos.length-1){
            l++;
        }
        else{
            
        }
        logo.src=logos[l];
    }
    setInterval(logo_animate,500);

// ##################-Animacja-Logo-##################

// ##################-Slider-V1-##################

// let i = 0;

// let img1 = "images/img1.jpg";
// let img2 = "images/img2.jpeg";
// let img3 = "images/img3.jpeg";
// let img4 = "images/img4.jpg";
// let img5 = "images/img5.jpg";



// let images = [img1,img2,img3,img4,img5]; 

// let img = document.createElement("img");
// img.classList.add("img");
// img.src=images[0];
// slider_items.appendChild(img);
// img.classList.add("slide_r");



// function next(){
//    if(i<images.length-1){
//         i++;
//    }
//    else{
//        i=0;
       
//    }
   
//    img.src=images[i];
   
// }

// function prew(){
    
//     if(i>0){
//          i--;
//     }
//     else{
//         i=images.length-1;
        
//     }
//     img.src=images[i];
//  }

//  setInterval(next,5000);

// ##################-Slider-V1-##################

// ##################-Slider-V2-##################

let i = 0;
let x = 0;

let img1 = document.createElement("img");
img1.src = "images/img1.jpg";

let img2 = document.createElement("img");
img2.src = "images/img2.jpeg";

let img3 = document.createElement("img");
img3.src = "images/img3.jpeg";

let img4 = document.createElement("img");
img4.src = "images/img4.jpg";

let img5 = document.createElement("img");
img5.src = "images/img5.jpg";

let images = [img1,img2,img3,img4,img5];

slider_items.appendChild(img1);
images[i].classList.add("slide_r");

function next(){
   if(i<images.length-1){
        slider_items.removeChild(images[i]);
        images[i].classList.remove("slide_r");
        i++;
        images[i].classList.add("slide_r");
        slider_items.appendChild(images[i]);
   }
   else{
       i=0;
       
   } 
}

function prew(){
    
    if(i>0){
        slider_items.removeChild(images[i]);
        images[i].classList.remove("slide_r");
        i--;
        images[i].classList.add("slide_l");
        slider_items.appendChild(images[i]);
    }
    else{
        i=images.length-1;
        
    }
    
}

images.forEach(function(e){  
    dot = document.createElement("span");
    dot.innerText=x+1;
    dot.classList.add("dot");
    dot.classList.add("dot_"+(x+1));
    dot_menu.appendChild(dot);
    x++;
})
let dots = document.querySelectorAll(".dot");
console.log(dots);
//  setInterval(next,5000);





// ##################-Slider-V2-##################