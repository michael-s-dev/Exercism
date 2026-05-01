export class Series {
  #series
  constructor(series) {
    if ( series.match(/\D/g) !== null ) throw new Error("digits input must only contain digits")
    if ( !series.length ) throw new Error("span must not exceed string length")
    this.#series = series.split('').map(Number)
  }

  slices(sliceLength) {
    if ( !sliceLength ) throw new Error("span must not be be zero")
    if ( sliceLength < 0 ) throw new Error("span must not be negative")
    if ( sliceLength > this.#series.length) throw new Error("span must not exceed string length")
    
    let result = []
    
    for( let i = 0; i <= this.#series.length - sliceLength; i++){
          result.push( this.#series.slice(i,i+sliceLength).reduce( (acc,n) => acc * n, 1) )
    }
    return result
  }
}


export const largestProduct = ( num , span ) => {
  let series = new Series(num).slices(span)
  return Math.max(...series)
  
};
