class Shapes {
    constructor(name) {
      this.color = '';
    }
    setColor(color){
      this.color = (color);
    }
  }

class Square extends Shape {
  render(){
    const square = `<rect x="10" y="10" width="30" height="30"/>`
    return square;
  }
}

class Circle extends Shape {
  render(){
    const circle = `<circle cx="25" cy="75" r="20"/>`
    return circle;
  }
}

class Triangle extends Shape {
  render(){
    const traingle = `<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"/>`
    return triangle;
  }
}
  
module.exports = Shapes