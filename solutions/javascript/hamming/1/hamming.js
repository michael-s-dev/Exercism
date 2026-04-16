export const compute = (a,b) => {
  if ( a.length !== b.length ) throw new Error('strands must be of equal length');
  return a.split('').filter( (letter,index) => letter !== b[index] ).length
};
