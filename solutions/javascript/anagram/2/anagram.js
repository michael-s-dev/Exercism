//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = ( word, candidates ) => {

  word = word.toLowerCase()

  const getCharCount = s => {
  let charCount = {}
  for (let char of s) {
     charCount[char] = ( charCount[char] || 0 ) + 1
  }
    return charCount
 }

 const wordCharCount = getCharCount(word)
  
  return candidates.filter( w => {
    w = w.toLowerCase()
    if( word === w || word.length !== w.length ) return false
    let targetCharCount = getCharCount(w)
    for ( let char in wordCharCount) {
      if ( targetCharCount[char] !== wordCharCount[char]) return false
    }
    return true
  })
};
