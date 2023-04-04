class Svg {
    openSvgTag = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;

    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        var svgLogo = this.openSvgTag + this.shapeElement +this.textElement + `</svg>`;
        return svgLogo;
    }

    setText(text,color) {
        this.textElement = `<text x="150" y="150" font-size="60" text-anchor="middle" fill=${this.color}`
    }

    setShape(shape) {
this.shapeElement = shape.render();
    }
}

module.exports = Svg;