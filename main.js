
document.addEventListener('DOMContentLoaded', function(){

  let aPixel = document.getElementsByClassName('aPixel')
  let pixelBox = document.getElementById('pixelBox')
  let colorBox = document.getElementById('colorBox')

  for (var i = 1; i <= 3115; i++) {
    let newPixel = document.createElement('div')
    pixelBox.appendChild(newPixel)
    newPixel.setAttribute('class', 'aPixel')
  }

  colorBox.addEventListener('click', function(event){
    var x = window.getComputedStyle(event.target).backgroundColor;

    console.log(x)

  });



});
