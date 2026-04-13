//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  if ( num <= 0 ) throw new Error('Only positive integers are allowed');

  let i = 0
  while( num !== 1 ){
    i++
    num % 2 === 0 ? num /= 2 : num = num*3+1
  }
  return i
};
