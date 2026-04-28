export const parse = ( phrase ) => {
  const words = phrase.split(/[\s-_]/)
  return words.map( word => word[0] ).join('').toUpperCase()
};
