var element = document.querySelector('.app-container');

var panel = document.querySelector('.panel-3');
var panelShadow = document.querySelector('.shadow-current')
var allPanel = document.querySelectorAll('.panel')

var isOn = false;

var panelWidth = panel.offsetWidth
var panelHeight = panel.offsetHeight



var mouseFunc = function(e){
  // console.log(e)

  // console.log(e)s

    // panel.style.transform = "skew(0deg, -3deg)rotate3d(0,1,0,-3deg)"
    // panelShadow.style.background = "linear-gradient(to right, rgba(45,45,45,0.4) 5%, rgba(0,0,0,0) 60%)"

    // console.log("X =" +(e.offsetX/panelWidth)*100);
    // console.log("Y =" +(e.offsetY/panelHeight)*100);


  //
  // let xPos = (e.offsetX/panelWidth)*100
  // // let yPos =
  // // console.log(-3/xPos)
  // if(xPos > 50){
  //   xPos = xPos - 50
  //   console.log(xPos *0.5)
  // }

  // let xPos = (e.screenX/windowWidth)*100



}

var tileOn = function(e){
  for (let i = 0; i < allPanel.length; i++){
    let newName = allPanel[i].classList[0] + " " + allPanel[i].classList[1]
    // console.log(allPanel[i].children)
    let shaName = allPanel[i].children[0].classList[0] + " " + allPanel[i].children[0].classList[1]
    // console.log(shaName)
    allPanel[i].children[0].className = shaName
    allPanel[i].className = newName

  }
}
var tileOff = function(e){

}


var statusSwitch = function(e){

  if(isOn === false){
    tileOn(e)
    isOn = true
  } else {
    tileOff(e)
    isOn = false

  }
  // console.log(e)
  //
  // console.log(allPanel)
}



panel.addEventListener('click', statusSwitch)
