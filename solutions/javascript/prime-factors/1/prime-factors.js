

export const primeFactors = (num) => {
    if ( typeof num !== 'number') throw new Error('Not a number')
    const pFactors = []
  
    for( let pf = 2 ; num !== 1; ){
      if ( num % pf === 0) {
        num /= pf
        pFactors.push( pf )
      }
      else pf > 2 ? pf += 2 : pf++
    } 
  return pFactors
};
