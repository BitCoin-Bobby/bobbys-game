document.body.style.backgroundColor = 'black'
let canvas = document.querySelector('canvas')
let renderingContext = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

renderingContext.fillStyle = 'white'
renderingContext.fillRect(0, 0, canvas.width, canvas.height)