// Look up jest js for testing

const shape = new Square();

shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30"/>')