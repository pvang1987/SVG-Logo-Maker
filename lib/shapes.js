class Shape {
  constructor(type, dimensions, fillColor) {
    this.type = type;
    this.dimensions = dimensions;
    this.fillColor = fillColor || 'black';
  }

  render() {
    if (this.type === 'Triangle') {
      const [base, height] = this.dimensions;
      return `<polygon points="0,${height} ${base / 2},0 ${base},${height}" fill="${this.fillColor}" />`;
    } else if (this.type === 'Circle') {
      const [radius] = this.dimensions; 
      return `<circle cx="${150}" cy="${100}" r="${100}" fill="${this.fillColor}" />`;
    } else if (this.type === 'Square') {
      const [sideLength] = this.dimensions;
      return `<rect x="${200 - sideLength / 2}" y="0" width="${200}" height="${200}" fill="${this.fillColor}" />`;
    }
  }
}

module.exports = Shape;
