
document.addEventListener('DOMContentLoaded', function(){

  let aPixel = document.getElementsByClassName('aPixel')
  let pixelBox = document.getElementById('pixelBox')
  let main = document.getElementsByTagName('main')[0]
  let theColors = document.getElementById('colorBox')
  let divC = document.getElementsByClassName('colors')
  let divP = document.getElementsByClassName('aPixel')
  let brushColor = '';
  let eraser = document.getElementById('white')
  let whiteColor = window.getComputedStyle(eraser).backgroundColor

    //This creates the pixels
  for (var i = 1; i <= 3149; i++) {
    let newPixel = document.createElement('div')
    pixelBox.appendChild(newPixel)
    newPixel.setAttribute('class', 'aPixel')
    newPixel.addEventListener('mouseenter', paint)
    newPixel.addEventListener('click', clickPaint)
  }
        //This applys the color
  let mouseState = false

  function clickPaint() {
    event.target.style.backgroundColor = brushColor || 'white';
  }
  function paint(){
      pixelBox.addEventListener('mousedown', function(event){

        mouseState = true

      })

      pixelBox.addEventListener('mouseup', function(event){

        mouseState = false

      })
      if(mouseState === true){
        event.target.style.backgroundColor = brushColor || 'white'
        event.target.style.borderColor = brushColor || 'white'
        if(brushColor === whiteColor)
        event.target.style.borderColor = '#C0B3AB'
        }
  }

      //This gets the color
  theColors.addEventListener('click', function(event){

    brushColor = window.getComputedStyle(event.target).backgroundColor
    console.log(brushColor)

  })
      //this is for if you have one click event
// if(event.target.className === divC[0].className) {
//   brushColor = window.getComputedStyle(event.target).backgroundColor
// }
// else if(event.target.className === divP[0].className) {
//   console.log("SET THE PIXEL COLOR: "+brushColor);
//   event.target.style.backgroundColor = brushColor
// }
});
