class Triangle {
    constructor(sideLength) {
      this.sideLength = sideLength;
      this.fillColor = 'black'; // Default color
    }
  
    setColor(color) {
      this.fillColor = color;
    }
  
    render() {
      return `<polygon points="0,${this.sideLength} ${this.sideLength / 2},0 ${this.sideLength},${this.sideLength}" fill="${this.fillColor}" />`;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
      this.fillColor = 'black'; // Default color
    }
  
    setColor(color) {
      this.fillColor = color;
    }
  
    render() {
      return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.fillColor}" />`;
    }
  }
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
      this.fillColor = 'black'; // Default color
    }
  
    setColor(color) {
      this.fillColor = color;
    }
  
    render() {
      return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.fillColor}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  