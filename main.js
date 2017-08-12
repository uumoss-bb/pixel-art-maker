
document.addEventListener('DOMContentLoaded', function(){

  let aPixel = document.getElementsByClassName('aPixel')
  let pixelBox = document.getElementById('pixelBox')
  let main = document.getElementsByTagName('main')[0]
  let theColors = document.getElementById('colorBox')
  let divC = document.getElementsByClassName('colors')
  let divP = document.getElementsByClassName('aPixel')
  let brushColor = '';

    //This creates the pixels
  for (var i = 1; i <= 3115; i++) {
    let newPixel = document.createElement('div')
    pixelBox.appendChild(newPixel)
    newPixel.setAttribute('class', 'aPixel')
  }
        //This applys the color
  pixelBox.addEventListener('mousedown', function(event){

    event.target.style.backgroundColor = brushColor

    // pixelBox.addEventListener('mouseup', function(event){
    //
    //   event.target.reomoveAttribute("background-color")
    //
    // })
  })
          //Im tryig to remove the backgroundColor on the even.target
          //its not working tho.
          
  // pixelBox.addEventListener('mouseup', function(event){
  //   event.target.reomoveAttribute("backgroundColor")
  // })
      //This gets the color
  theColors.addEventListener('click', function(event){

    brushColor = window.getComputedStyle(event.target).backgroundColor

  })
      //this is for if you have one click event
// if(event.target.className === divC[0].className) {
//   brushColor = window.getComputedStyle(event.target).backgroundColor
// }
// else if(event.target.className === divP[0].className) {
//   console.log("SET THE PIXEL COLOR: "+brushColor);
//   event.target.style.backgroundColor = brushColor
// }
})
