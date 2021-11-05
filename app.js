// add navBar functionality
$(document).ready(function(){

    // jQuery methods go here...
    $(".toggle-btn").click(()=>{
        $(".mobile-nav-bar").slideToggle(700);
    })
  });


// Change bg color
const circleDivs = document.querySelectorAll(".circle-div");
const bluePanel = document.querySelector(".blue");
const pinkPanel = document.querySelector(".pink");
const yellowPanel = document.querySelector(".yellow");
const grayPanel = document.querySelector(".gray");
const mainContent = document.querySelector(".main-content");
const colors = ["#0392BF", "#ED48BA","#FBEC06","#B3D4E0"];
// Once content is loaded remove the white border from our divs
window.addEventListener("DOMContentLoaded",()=>{
    // Change bg -color
   changeBackgroundColor();
})


function removeBorder(){
    circleDivs.forEach(colorPanel => {
      console.log(colorPanel); 
      colorPanel.classList.remove("active")
    })
}
function changeBackgroundColor(){
    bluePanel.addEventListener("click",()=>{
            // Remove white border from all color panels
            removePinkClass();
             removeBorder();
           mainContent.style.backgroundColor =colors[0];
           bluePanel.classList.add("active");
      
    })
    // Pink Panel
    pinkPanel.addEventListener("click",()=>{
            // Remove white border from all color panels
             removeBorder();
             mainContent.style.backgroundColor = colors[1];
             mainContent.classList.add('pink');
             pinkPanel.classList.add("active");
      
    })
    yellowPanel.addEventListener("click",()=>{
            // Remove white border from all color panels
             removeBorder();
             removePinkClass();
             mainContent.style.backgroundColor = colors[2];
             yellowPanel.classList.add("active");
    })
    grayPanel.addEventListener("click",()=>{
      
            // Remove white border from all color panels
             removeBorder();
             removePinkClass();
             mainContent.style.backgroundColor = colors[3];
             grayPanel.classList.add("active");
    })

}

function removePinkClass(){
    if(mainContent.classList.contains("pink")){
        mainContent.classList.remove("pink")
    }
}