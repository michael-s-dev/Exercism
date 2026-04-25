// Hello

export const valid = (input) => {
  input = input.replaceAll(' ', '')
  if ( input.length < 2 ) return false

  let sum = 0
  for (let i = input.length-1 , second = false; i >= 0; i-- , second = !second) {
     let num = Number(input[i])
     if ( isNaN(num) ) return false
     if ( second ) sum += num*2 > 9 ? num*2-9 : num*2 
     else sum += num
  }
  return sum % 10 === 0
};
