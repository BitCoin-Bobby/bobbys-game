document.body.style.backgroundColor = 'black'
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

let keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

class Sprite {
    constructor({position, src, width, height}){
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true
        }
        this.width = width
        this.height = height
        this.image.src = src
        this.loaded = false
    }
    draw(){
        if(!this.loaded) return
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
class Player {
    constructor(){
        this.gravity = 1
        this.position = {
            x : 100,
            y : 100
        }
        this.height = 100
        this.width = 100
        this.sides = {
            top: this.position.y,
            bottom: this.position.y + this.height,
            left: this.position.x,
            right: this.position.x + this.width
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
        
        if(this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity
        }else{
            this.velocity.y = 0
        }
    }
}

const player = new Player()
const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    src: './images/background1.jpg',
    width: canvas.width,
    height: canvas.height
})

const animate = () => {
    window.requestAnimationFrame(animate)
    background.draw()
    
    player.velocity.x = 0
    if(keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5
    
    player.draw()
    player.update()
}
animate()

document.body.addEventListener('keydown', e => {
    switch (e.key){
        case 'w':
            if(player.velocity.y === 0) player.velocity.y = -20
        break
        case 'a':
            keys.a.pressed = true
        break
        case 'd':
            keys.d.pressed = true
        break
    }
})
document.body.addEventListener('keyup', e => {
    switch (e.key){
        case 'a':
            keys.a.pressed = false
        break
        case 'd':
            keys.d.pressed = false
        break
    }
})