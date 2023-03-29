const Shapes = require('./shapes.js');
class Circle extends Shapes {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
};

module.exports = Circle