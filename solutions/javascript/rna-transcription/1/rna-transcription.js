//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CONVERSION = { 'C' : 'G' , 'G' : 'C', 'T' : 'A', 'A' : 'U'}
export const toRna = (dna) => {
   return dna.split('').reduce((acc,ch) => acc += CONVERSION[ch], '')
};
