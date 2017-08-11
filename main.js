
document.addEventListener('DOMContentLoaded', function(){

  let aPixel = document.getElementsByClassName('aPixel')
  let pixelBox = document.getElementById('pixelBox')
  console.log(pixelBox)

  for (var i = 1; i <= 3115; i++) {
    let newPixel = document.createElement('div')
    pixelBox.appendChild(newPixel)
    newPixel.setAttribute('class', 'aPixel')
  }
});
