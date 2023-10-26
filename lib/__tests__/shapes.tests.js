const Shape = require('../shapes');

describe('Shape', () => {
  it('should render a triangle SVG', () => {
    const triangle = new Shape('Triangle', [100, 100], 'blue');
    expect(triangle.render()).toEqual('<polygon points="0,100 50,0 100,100" fill="blue" />');
  });

  it('should render a circle SVG', () => {
    const circle = new Shape('Circle', [100, 100], 'red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
  });

  it('should render a square SVG', () => {
    const square = new Shape('Square', [200, 200], 'green');
    expect(square.render()).toEqual('<rect x="100" y="0" width="200" height="200" fill="green" />');
  });

});
