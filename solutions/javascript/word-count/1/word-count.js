
export const countWords = (sentence) => {
   const words = sentence.toLowerCase().match(/(\w+'\w+)|\w+/g)
   let result = new Map() 

  for (let word of words) {
   result.set( word, (result.get(word) || 0) + 1 )
  }

  return Object.fromEntries(result)
};
