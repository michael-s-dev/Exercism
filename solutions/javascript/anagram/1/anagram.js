//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = ( word, candidates ) => {
  word = word.toLowerCase()
  return candidates.filter( w => {
    w = w.toLowerCase()
    if( word === w || word.length !== w.length ) return false
    for (let i = 0; i < word.length; i++) {
       let letterIndex = w.indexOf(word[i])
       if ( letterIndex > -1 ) w = w.slice(0,letterIndex) + w.slice(letterIndex+1)
    }
    return !w.length
  })
};
