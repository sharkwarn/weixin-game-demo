var canvas = wx.createCanvas()
var ctx = canvas.getContext('2d')

const res = wx.getSystemInfoSync()
const global = {
    height: res.windowHeight,
    width: res.windowWidth
}

const point = [
    {
        x: 100,
        y: global.height
    }
]

// movePoint()
ctx.beginPath()
ctx.arc(200,300, 100, 0, Math.PI*2)
ctx.strokeStyle = '#f00'
ctx.fillStyle = '#f00'
ctx.fill
ctx.stroke()

ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(10, 10)
ctx.lineTo(20, 30)
ctx.lineTo(30, 70)
ctx.lineTo(0, 70)
ctx.closePath()
ctx.strokeStyle = "#0ff"
ctx.fillStyle = '#0f0'
ctx.fill()
ctx.stroke()



function movePoint( ) {
    clearCanvas()
    point.forEach((item, index) => {
        let { x, y } = item
        ctx.beginPath()
        y = y-2
        ctx.arc(x, y, 5, 0, Math.PI*2)
        ctx.strokeStyle="#fff";
        ctx.fillStyle = "red"
        ctx.stroke();
        point[index] = {x,y}
    })
    setTimeout(() => {
        return movePoint()
    }, 10);
}


function clearCanvas() {
    ctx.clearRect(0, 0, global.width, global.height)
}