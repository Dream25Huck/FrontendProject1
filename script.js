let currentPosition = localStorage.setItem('currentPosition', position);
let position = window.scrollY;

document.addEventListener("DOMContentLoaded", function(){
  let getPosition = localStorage.getItem("currentPosition");
  if(getPosition!=null){
    window.scrollY(0, parseInt(getPosition, 10));
  }
})