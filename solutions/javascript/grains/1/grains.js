
export const square = (n) => {
  if( n < 1 || n > 64) throw new Error('square must be between 1 and 64')
  // let grains = 2n ** BigInt(n-1) 
  return 1n << BigInt(n-1) 
};

export const total = () =>  (1n << 64n) - 1n 


