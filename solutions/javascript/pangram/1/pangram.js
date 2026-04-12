//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
export const isPangram = (sentence) => {
   for (let letter of ALPHABET) {
      if (!sentence.toLowerCase().includes(letter)) return false
   }
  return true
};
