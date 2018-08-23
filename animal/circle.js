class Circle {
    constructor(option) {
        const { r = 5, tx = 5, ty = 5, color = '#f00' } = option
        this.state = {
            width: option.width,
            height: option.height,
            x: 0,
            y: 0,
            r,
            tx,
            ty,
            color
        }
        this.create(this.state)
    }

    setState = (option) => {
        if( !option ) return
        const state = this.state
        this.state = {
            ...state,
            ...option
        }
    }

    create = ({ width, height }) => {
        this.setState({
            x: Math.random()*width,
            y: Math.random()*height
        })
    }

    move = () => {
        let { x, y, tx, ty } = this.state
        let moveX = (Math.random() - 0.5)* tx
        let moveY = (Math.random() - 0.5) * ty
        let obj = {
            x: x+moveX,
            y: y+moveY
        }
        this.setState(obj)
        return obj
    }

    render = (context) => {
        context.beginPath();
        const { x, y } = this.move()
        const { r, color } = this.state
        context.arc(x, y, r, 0, Math.PI*2)
        context.fillStyle=color;
        context.fill()
        context.stroke()
        context.closePath();
    }
}

module.exports = Circle