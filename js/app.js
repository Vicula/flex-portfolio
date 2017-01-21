var element = document.querySelector('.app-container');

var panel = document.querySelector('.panel-3');
var panelShadow = document.querySelector('.shadow-current')

var panelWidth = panel.offsetWidth
var panelHeight = panel.offsetHeight



var mouseFunc = function(e){
  // console.log(e)

  // console.log(e)s


  panel.style.transform = "rotate3d(0,1,0,-25deg)"

  console.log("X =" +(e.offsetX/panelWidth)*100);
  console.log("Y =" +(e.offsetY/panelHeight)*100);


  // let xPos = (e.screenX/windowWidth)*100



}



panel.addEventListener('mousemove', mouseFunc)
