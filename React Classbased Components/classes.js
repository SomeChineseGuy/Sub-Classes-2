const obj = {
  username: "Alvin",
  num: 20,
  sayMyName: (name) => {
    return 'Hello, ' + name
  }
}

const obj2 = {
  username: "Alvin",
  num: 200,
  sayMyName: (name) => {
    return 'Goodbye, ' + name
  }
}

class Rectangle { 
  // Create my blueprint for the class
  constructor(length, width) {
    // This is my blueprint
    this.length = length
    this.width = width
  }

  // area: () => {}
  area() {
    return this.length * this.width
  }

  printSize() {
    return `Width: ${this.width}, Length: ${this.length}`
  }
}

const myRectangle = new Rectangle(4, 3);
console.log(myRectangle.area());
console.log(myRectangle.printSize());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width)
    this.height = height
  }

  area() {
    return this.width * this.length * this.height
  }

  printSize() {
    return `Width: ${this.width}, Length: ${this.length}, Height: ${this.height}`
  }
}

const myPrism = new Prism(4, 3, 10);
console.log(myPrism.area());
console.log(myPrism.printSize());