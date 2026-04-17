
export const classify = (num) => {
  if ( num < 1) throw new Error('Classification is only possible for natural numbers.')
  if ( num === 1) return 'deficient'
  let sum = 1
  let limit = Math.sqrt(num)

  for (let i = 2; i <= limit; i++) {
    if ( num % i === 0) sum += i +(i !== num / i ? num / i : 0)
  }
  
  if ( sum === num ) return 'perfect'
  if ( sum > num ) return 'abundant'
  return 'deficient'
};
