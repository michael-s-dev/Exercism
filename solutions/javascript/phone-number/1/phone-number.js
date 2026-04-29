
export const clean = ( number ) => {
    let letters = number.match(/[a-zA-Z]/g)
    if ( number.match(/[\@\:\!\?]/g)) throw new Error('Punctuations not permitted')
    if ( letters !== null ) throw new Error('Letters not permitted')
  
    let digits = number.match(/\d/g) || [];
    if ( digits.length > 11 ) throw new Error('Must not be greater than 11 digits')
    if ( digits.length < 10 ) throw new Error('Must not be fewer than 10 digits')
    if ( digits.length === 11 ) {
      if ( digits[0] !== '1') throw new Error('11 digits must start with 1')
      digits = digits.slice(1)
    }

   let n = digits[0] === '0' ? 'zero' : 'one'
   let n2 = digits[3] === '0' ? 'zero' : 'one'
   if( Number(digits[0]) < 2 ) throw new Error(`Area code cannot start with ${n}`) 
   if( Number(digits[3]) < 2 ) throw new Error(`Exchange code cannot start with ${n2}`) 
  
    return digits.join('')
};
