

export function triplets({ minFactor = 0, maxFactor , sum }) {
  let result = [];
  maxFactor = maxFactor ?? sum
  for (let a = minFactor; a < sum / 3; a++) {
       for( let b = a+1; b < (sum-a) / 2 && b <= maxFactor ; b++ ){
            let c = sum - b - a 
            if( a**2 + b**2 === c**2 && c <= maxFactor) result.push(new Triplet(a,b,c))
       }
  }
  return result
}

class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray() {
    return [this.a,this.b,this.c]
  }
}
