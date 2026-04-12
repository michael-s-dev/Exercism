//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {

    question = question.replace(/by\s|\?/g, '')
    let parts = question.split(' ')
    let allowedOperations = ['minus' , 'plus' , 'divided' , 'multiplied']
    let isNumber = (num) => isNaN(parseInt(num)) ? false : true
      
    if(  !question.startsWith('What is')) throw new Error('Unknown operation')
    if(  question.endsWith('What is')) throw new Error('Syntax error')

    let acc
    for (let i = 2; i < parts.length; i++) {
      let part = parts[i]
      let nextNum = parts[i+1]
      if ( isNumber(part) ) acc = parseInt(part)
      else if ( allowedOperations.includes(part) ){
        if( !isNumber(nextNum) || isNumber(parts[i+2]) || acc === undefined ) throw new Error('Syntax error')
        if ( part === 'minus'){
          acc -= parseInt(nextNum)
          parts.splice(i+1,1)
        }
        if ( part === 'plus'){
          acc += parseInt(nextNum)
          parts.splice(i+1,1)
        }
        if ( part === 'divided'){
          acc /= parseInt(nextNum)
          parts.splice(i+1,1)
        }
        if ( part === 'multiplied'){
          acc *= parseInt(nextNum)
          parts.splice(i+1,1)
        }
      }
      else { 
        throw new Error('Unknown operation')
      }
      
    }
    return acc
 
};
