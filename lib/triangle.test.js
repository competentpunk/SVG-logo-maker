// Look up jest js for testing

const shape = new Triangle();

shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"/>')