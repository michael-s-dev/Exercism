//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  #sumOfSquares
  #squareOfSum
  
  constructor(count) {
     this.count = count
     this.#sumOfSquares = ( this.count * ( this.count+1 ) * ( this.count*2 + 1 ) ) / 6
     this.#squareOfSum = (( this.count * ( this.count + 1 ) ) / 2 ) ** 2
  }

  get sumOfSquares() {   
    return this.#sumOfSquares
  }

  get squareOfSum() {
    return this.#squareOfSum   
  }

  get difference() {
    return Math.abs(this.#sumOfSquares - this.#squareOfSum)
  }
}
