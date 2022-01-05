// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
btn.addEventListener("click", function(){
 if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  } 
})

const HOTD = () => {
 window.open("https://xdubteam.blogspot.com/2021/03/high-school-of-dead-hindi-dubbed.html"); 
}
