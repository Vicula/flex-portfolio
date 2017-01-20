var element = document.querySelector('.app-container');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var mouseFunc = function(e){
  // console.log(e)

  console.log("X =" +(e.screenX/windowWidth)*100);
  console.log("Y =" +(e.screenY/windowHeight)*100);
}


element.addEventListener('mousemove', mouseFunc)
