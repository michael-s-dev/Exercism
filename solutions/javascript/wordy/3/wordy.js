//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {

    question = question.replace(/by\s|\?/g, '')
    let parts = question.split(' ')
    let allowedOperations = ['minus' , 'plus' , 'divided' , 'multiplied']
      
    if(  !question.startsWith('What is')) throw new Error('Unknown operation')
    if(  question.endsWith('What is')) throw new Error('Syntax error')

    let acc
    for (let i = 2; i < parts.length; i++) {
      let part = parts[i]
      let nextNum = parts[i+1]
      if ( !isNaN(part) ) acc = Number(part)
     else if ( allowedOperations.includes(part) ){
        if( isNaN(nextNum) || !isNaN(parts[i+2]) || acc === undefined ) throw new Error('Syntax error')
        if ( part === 'minus') acc -= Number(nextNum)
        if ( part === 'plus') acc += Number(nextNum)
        if ( part === 'divided') acc /= Number(nextNum)
        if ( part === 'multiplied') acc *= Number(nextNum)
        i++
      }
      else { 
        throw new Error('Unknown operation')
      }
      
    }
    return acc
 
};
