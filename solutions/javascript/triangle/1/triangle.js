//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
     this.sides = sides
     this.isTriangle = this.triangleCheck()
  }

  triangleCheck(){
    let sorted = this.sides.sort( (a,b) => a-b )
    return !(this.sides.some( (side) => side <= 0 ) || sorted[0] + sorted[1] < sorted[2] )
  }
  
  get isEquilateral() {
    return this.sides.every( (side,i,arr) => side === arr[0] ) && this.isTriangle
  }

  get isIsosceles() {
    return (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || 
            this.sides[0] === this.sides[2]) && this.isTriangle
  }

  get isScalene() {
    return (this.sides[0] !== this.sides[1] && this.sides[0] !== this.sides[2] && 
            this.sides[1] !== this.sides[2]) && this.isTriangle
  }
}
