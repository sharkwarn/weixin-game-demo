var canvas = wx.createCanvas()
var context = canvas.getContext('2d')

const assets = {
    background: null,
    leaf: null
}
const res = wx.getSystemInfoSync()
const global = {
    height: res.windowHeight,
    width: res.windowWidth
}

let leafArr = []

var imageBackground = wx.createImage()
imageBackground.onload = function() {
    console.log('download background success')
    context.drawImage(imageBackground, 0, 0)
    assets.background = imageBackground
    
}
imageBackground.src = 'https://raw.githubusercontent.com/sharkwarn/note/master/asset/background1-min.jpg'

var imageLeaf = wx.createImage()
imageLeaf.onload = function() {
    console.log('download leaf success')
    context.drawImage(imageLeaf, 0, 0)
    assets.leaf = imageLeaf
    
}
imageLeaf.src = 'https://raw.githubusercontent.com/sharkwarn/note/master/asset/111.png'
createLeaf(20)
moveLeaf()
function createLeaf(length) {
    leafArr.push({
        x: Math.random()*global.width*1.5,
        y: 0
    })
    length --
    if( length >= 1 ) {
        setTimeout(() => {
            return createLeaf(length)
        }, 1000)
    }
}


function moveLeaf () {
    drawBackground()
    leafArr.map((item, index) => {
        let { x, y } = item
        context.beginPath()
        // clearArc(x, y, 5)
        y = y + 2
        x =  x + Math.random()*2 - 1.5
        context.strokeStyle = "#f36"
        if( y > global.height ) {
            leafArr.splice(index,1)
            createLeaf(1)
            return
        }
        drawLeaf(x, y)
        leafArr[index] = {
            x,
            y
        }

    })
    setTimeout(()=>{
        moveLeaf()
    }, 10)
}

function clearArc (x, y, r) {
    const a = r * 2
    context.clearRect(x - r, y-r, a, a )
}

function drawLeaf(x, y) {
    if( assets.leaf ) {
        context.drawImage(assets.leaf, x, y)
    }
}

function drawBackground() {
    if( assets.background ) {
        context.drawImage(assets.background, 0, 0)
    }
}
