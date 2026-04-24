//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class ComplexNumber {
  #real
  #imaginary
  
  constructor(r,i) {
    this.#real = r
    this.#imaginary = i
  }

  get real() {
   return this.#real
  }

  get imag() {
  return this.#imaginary
  }

  add(cnum) {
    // (a + c) + (b + d) * i
    let [a,b,c,d] = [this.real ,this.imag, cnum.real, cnum.imag]
    return new ComplexNumber( a + c , b + d )
  }

  sub(cnum) {
   // (a - c) + (b - d) * i
    let [a,b,c,d] = [this.real , this.imag, cnum.real, cnum.imag]
    return new ComplexNumber( a - c , b - d )
  }

  div(cnum) {
    // (a * c + b * d) / (c^2 + d^2) + (b * c - a * d) / (c^2 + d^2) * i
    let [a,b,c,d] = [this.real , this.imag, cnum.real, cnum.imag]
    return new ComplexNumber( (a * c + b * d) / (c**2 + d**2) , (b * c - a * d) / (c**2 + d**2) )
  }

  mul(cnum) {
    // (a * c - b * d) + (b * c + a * d) * i
    let [a,b,c,d] = [this.real , this.imag, cnum.real, cnum.imag]
    return new ComplexNumber( a * c - b * d , b * c + a * d )
  }

  get abs() {
   return Math.sqrt(this.real**2 + this.imag**2)
  }

  get conj() {
   return new ComplexNumber( this.real, -this.imag )
  }

  get exp() {
   return new ComplexNumber( Math.E**this.real * Math.cos(this.imag) , Math.E**this.real * Math.sin(this.imag))
  }
}
