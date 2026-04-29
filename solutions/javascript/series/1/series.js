
export class Series {
  #series
  constructor(series) {
    this.#series = series.split('').map(Number)
  }

  slices(sliceLength) {
    if ( !this.#series.length ) throw new Error("series cannot be empty")
    if ( !sliceLength ) throw new Error("slice length cannot be zero")
    if ( sliceLength < 0 ) throw new Error("slice length cannot be negative")
    if ( sliceLength > this.#series.length) throw new Error("slice length cannot be greater than series length")
    
    let result = []
    
    for( let index = 0; index <= this.#series.length - sliceLength; index++){
          result.push( this.#series.slice(index, index + sliceLength))
    }
    return result
  }
}
