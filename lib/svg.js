class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    setText(text, color) {
    const textX = 150; 
    const textY = 115; 
    this.text = `<text x="${textX}" y="${textY}" fill="${color}" text-anchor="middle" font-size="40" dominant-baseline="middle">${text}</text>`;
    }
    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = SVG;