//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let isQuestion = message.trim().at(-1) === '?'
  let isYelling = isUpperCase(message)
  let isSilence = message.trim() === ''

  if( isQuestion && isYelling) return  'Calm down, I know what I\'m doing!'
  if( isYelling ) return 'Whoa, chill out!'
  if( isSilence ) return 'Fine. Be that way!'
  if( isQuestion ) return 'Sure.'
  return 'Whatever.'
  
};

export function isUpperCase(message){
  let letters = message.match(/[a-z]+/gi)
  if (letters === null ) return false
  return letters.every( letter => letter === letter.toUpperCase())

}
