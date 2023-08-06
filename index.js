document.body.style.backgroundColor = 'black'
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let y = 100

const animate = () => {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'red'
    ctx.fillRect(100, y, 100, 100)
    y++
}
animate()