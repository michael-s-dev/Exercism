
export const isValid = (isbn) => {
   isbn = isbn.replaceAll('-','')
   if( isbn.length !== 10 || isbn.match(/[^0-9X]/g) !== null) return false
   let sum = 0
   for( let i = 0; i < 10; i++){
      let digit = isbn[i]
      if( digit === "X") digit = 10
      if( digit === 10 && i !== 9 ) return false
      sum += parseInt(digit) * Math.abs(i-10)
   }
   return !(sum % 11)
};
