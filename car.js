class Car {
  color

  #brand

  constructor(color, brand) {
    this.color = color
    this.#brand = brand
  }

  displayInfo() {
    console.log(`This is a ${this.color} car of brand ${this.#brand}`)
  }

  #private Brand(){
    return `Brand: ${this.#brand}`
  }
}
