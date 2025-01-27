class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  // Getter
  get area() {
    return this.calcArea()
  }

  // Method
  calcArea() {
    return this.height * this.width
  }
}
const square = new Polygon(10, 10)
console.log(square.area)
