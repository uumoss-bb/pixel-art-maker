
document.addEventListener('DOMContentLoaded', function(){

  let aPixel = document.getElementsByClassName('aPixel')
  let pixelBox = document.getElementById('pixelBox')
  let main = document.getElementsByTagName('main')[0]
  let theColors = document.getElementById('colorBox')
  let divC = document.getElementsByClassName('colors')
  let divP = document.getElementsByClassName('aPixel')
  let brushColor = '';

  for (var i = 1; i <= 3115; i++) {
    let newPixel = document.createElement('div')
    pixelBox.appendChild(newPixel)
    newPixel.setAttribute('class', 'aPixel')
  }

  main.addEventListener('click', function(event){

      if(event.target.className === divC[0].className) {
        brushColor = window.getComputedStyle(event.target).backgroundColor
      }
      else if(event.target.className === divP[0].className) {
        console.log("SET THE PIXEL COLOR: "+brushColor);
        event.target.style.backgroundColor = brushColor

      }

  });



});
